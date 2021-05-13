import { Component, OnInit, ViewChild } from '@angular/core';
import { IntranetContentWithTableComponent } from '../../../../../../shared/components/content-with-table/content-with-table.component';
import { FeatureModel } from '../../../models/feature.model';

@Component({
    selector: 'intranet-security-users',
    templateUrl: './users.component.html'
})

export class SecurityUsersComponent implements OnInit {

    titulo = 'Características';
    descripcion = 'La opción permite el registro y eliminación de características';
    icon = 'money';
    tableColumns = ['check', 'name', 'description', 'acciones'];
    filterColumns = ['Name', 'Description'];


    @ViewChild(IntranetContentWithTableComponent, { static: true }) content: IntranetContentWithTableComponent<FeatureModel>;


    constructor() { }

    ngOnInit() {

    }

    list() {

    }

    create() {

    }

    edit(item: FeatureModel) {

    }

    remove(item: FeatureModel) {

    }
}