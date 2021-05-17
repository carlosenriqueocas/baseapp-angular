import { Component, Input } from '@angular/core';

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