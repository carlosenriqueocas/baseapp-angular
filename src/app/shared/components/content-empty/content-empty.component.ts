import { Component, Input } from '@angular/core';
import { ConfigComponent } from '../../models/components/config-table-modal.model';

@Component({
    selector: 'content-empty',
    templateUrl: './content-empty.component.html'
})

export class IntranetContentEmptyComponent {
    loading = false;

    @Input() configComponent: ConfigComponent = new ConfigComponent();

}