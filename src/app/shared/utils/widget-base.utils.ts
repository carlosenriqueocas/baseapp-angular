import { Component } from '@angular/core';

@Component({
    template: ''
})
export abstract class WidgetBaseComponent {

    title = 'Default';
    description = 'Default';
    icon = 'check';

    // abstract setData(data: T): T;

    // abstract getData(): Promise<T>;
}