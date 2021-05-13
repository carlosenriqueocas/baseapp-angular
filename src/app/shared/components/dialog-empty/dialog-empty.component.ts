import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'dialog-empty',
    templateUrl: './dialog-empty.component.html'
})

export class IntranetDialogEmptyComponent implements OnInit {
    @Input() title = 'Titulo';
    @Input() description = 'Descripción';
    @Input() icon = 'check';
    @Input() size = 'sm';

    @Output() closeDialog = new EventEmitter<any>();
    modalSize = '';
    constructor() { }

    ngOnInit() {
        switch (this.size) {
            case 'sm':
                this.modalSize = 'dialog-sm'; break;
            case 'md':
                this.modalSize = 'dialog-md'; break;
            case 'lg':
                this.modalSize = 'dialog-lg'; break;
            case 'xl':
                this.modalSize = 'dialog-xl'; break;
            case 'none':
                this.modalSize = ''; break;
        }
    }
}