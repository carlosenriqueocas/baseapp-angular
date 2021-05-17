import { Component } from '@angular/core';
import { ConfigComponent } from './config-table-modal.model';

@Component({
    template: ''
})
export abstract class BaseComponent {

    configComponent: ConfigComponent;

    constructor() {
        this.configComponent = new ConfigComponent();
    }

    // abstract setData(data: T): T;

    // abstract getData(): Promise<T>;
}