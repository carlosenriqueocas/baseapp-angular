import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';

import { IntranetContentWithTableComponent } from '@shared_components/content-with-table/content-with-table.component';
import { DefaultPropertiesComponent } from '@shared_core/decorators/default-values-component.decorator';
import { ToolService } from '@shared_core/services/core.service';

import { WidgetBaseComponent } from '@shared_utils/widget-base.utils';

import { FeatureModel } from '../../../models/feature.model';
import { FeatureEditComponent } from '../edit/edit.component';

@DefaultPropertiesComponent({
    title: 'Usuarios',
    description: 'Permite un CRUD de usuarios',
    icon: 'users'
})
@Component({
    selector: 'intranet-security-users',
    templateUrl: './index.component.html'
})

export class SecurityUsersComponent extends WidgetBaseComponent implements OnInit {
    tableColumns = ['check', 'name', 'description', 'acciones'];
    filterColumns = ['Name', 'Description'];

    @ViewChild(IntranetContentWithTableComponent, { static: true }) content: IntranetContentWithTableComponent<FeatureModel>;

    constructor(
        private toolsService: ToolService,
    ) {
        super();
    }

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