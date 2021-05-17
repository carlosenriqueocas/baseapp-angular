import { AfterContentInit, Component, Input, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';

import { TableWrapperComponent } from '@shared_models/components/table-wrapper-component.model';
import { ResponseMessage } from '@shared_models/response.model';
import { Constants } from '@shared_models/constants.model';
import { ToolService } from '@shared_core/services/core.service';

import * as objectPath from 'object-path';

type PromiseMultipleDeleteType = (CatalogIds: string[]) => Promise<ResponseMessage<void>>;

@Component({
    selector: 'content-with-table',
    templateUrl: './content-with-table.component.html'
})

export class IntranetContentWithTableComponent<T> extends TableWrapperComponent implements OnInit, AfterContentInit, OnDestroy {
    loading = false;

    selection = new SelectionModel<T>(true, []);

    @Input() titulo: string = 'Titulo';
    @Input() descripcion: string = 'Descripción';
    @Input() icon: string = 'check';
    @Input() filterColumns: string[] = [];
    @Input() dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
    @Input() validatorRef: (item: T) => boolean = null;

    @Output() selected = new EventEmitter<number>();
    @Output() list = new EventEmitter<void>();
    @Output() deleteSelectedFunction = new EventEmitter<void>();

    private multipleDeletePromise: PromiseMultipleDeleteType;
    private messageAlertMultipleDelete = null;

    private sub: Subscription;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private toolsService: ToolService
    ) {
        super();
    }

    ngAfterContentInit() {
        this.tableContentRefresh();
    }

    ngOnInit() {
        //if(this.isOnlyUserAccess) this.userId  = LocalStorageHelper.getUserId();
        this.sub = this.selection.changed.subscribe(response => {
            let selected = response.source.selected.length;
            if (selected > 0) {
                this.selected.emit(selected);
            }
        });
    }

    setDataSource(_data: T[]) {
        this.clearSelected();
        this.dataSource = new MatTableDataSource<T>(_data);
        this.dataSource.paginator = this.paginator;
        this.setFilterPredicate();
    }

    setFilterToSearch(filter: string) {
        this.dataSource.filter = filter;
        this.clearSelected();
    }

    setMultipleDeletePromise(p: PromiseMultipleDeleteType) {
        this.multipleDeletePromise = p;
    }

    setMessageAlertMultipleDelete(message) {
        this.messageAlertMultipleDelete = message;
    }

    getSelected(): T[] {
        return this.selection.selected;
    }

    validator(item: T): boolean {
        if (this.validatorRef) {
            return this.validatorRef(item);
        }
        return true;
    }

    private setFilterPredicate() {
        if (this.filterColumns.length > 0) {
            this.dataSource.filterPredicate = (data: T, filter: string): boolean => {
                let search = filter.trim().toLowerCase();
                let coincidences = 0;
                this.filterColumns.forEach(c => {
                    let attribute = String(objectPath.get(data, c.trim()))?.toLowerCase() || '';
                    coincidences = coincidences + (attribute.indexOf(search) != -1 ? 1 : 0);
                });
                return coincidences > 0;
            }
        }
    }

    async deleteSelected() {
        if (this.multipleDeletePromise) {
            let selected = this.getSelected().map(s => s["IdCatalog"]);

            if (selected.length > 0) {
                let { isConfirmed } = (this.messageAlertMultipleDelete) ?
                    await this.toolsService.sweetAlert.confirmation2(`¿Está seguro de eliminar los <b>${selected.length} item(s)</b> seleccionados?`, this.messageAlertMultipleDelete) :
                    await this.toolsService.sweetAlert.confirmation(`¿Está seguro de eliminar los <b>${selected.length} item(s)</b> seleccionados?`);

                if (isConfirmed) {
                    this.toolsService.splash.show();
                    let { status, message, validate } = await this.multipleDeletePromise(selected);
                    this.toolsService.splash.hide();

                    if (status == Constants.STATUS.Success) {
                        this.list.emit();
                    }

                    this.toolsService.sweetAlert.show(status, message);
                }
            }
        } else {
            this.deleteSelectedFunction.emit();
        }
    }

    private clearSelected() {
        this.selection.clear();
    }

    isAllSelected() {
        let checksNotAllowed = (this.validatorRef) ? this.dataSource.filteredData.filter(d => !this.validatorRef(d))?.length || 0 : 0;

        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.filteredData.length - checksNotAllowed;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.filteredData.forEach(row => {
                if (this.validatorRef) {
                    if (this.validatorRef(row)) this.selection.select(row);
                } else {
                    this.selection.select(row);
                }
            });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}