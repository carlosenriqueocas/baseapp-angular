import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';

import { IntranetContentWithTableComponent } from '@shared_components/content-with-table/content-with-table.component';
import { ToolService } from '@shared_core/services/core.service';

import { FeatureModel } from '../../../models/feature.model';
import { FeatureEditComponent } from '../edit/edit.component';

@Component({
    selector: 'intranet-security-users',
    templateUrl: './index.component.html'
})

export class SecurityUsersComponent implements OnInit {

    titulo = 'Características';
    descripcion = 'La opción permite el registro y eliminación de características';
    icon = 'money';
    tableColumns = ['check', 'name', 'description', 'acciones'];
    filterColumns = ['Name', 'Description'];


    @ViewChild(IntranetContentWithTableComponent, { static: true }) content: IntranetContentWithTableComponent<FeatureModel>;


    constructor(
        private toolsService: ToolService,
    ) { }

    ngOnInit() {

    }

    list() {

    }

    create() {
        let refDialog = this.toolsService.dialog.open(FeatureEditComponent, { data: null });
        refDialog.afterClosed().pipe(take(1)).subscribe(async response => {
            if (response) await this.list();
        });
    }

    edit(item: FeatureModel) {

    }

    remove(item: FeatureModel) {

    }
}