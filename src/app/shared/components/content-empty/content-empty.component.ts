import { AfterContentInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TableWrapperUtil } from '../../utils';


@Component({
    selector: 'content-empty',
    templateUrl: './content-empty.component.html'
})

export class IntranetContentEmptyComponent {
    loading = false;

    @Input() titulo: string = 'Titulo';
    @Input() descripcion: string = 'Descripción';
    @Input() icon: string = 'check';

}