import { Component } from '@angular/core';

@Component({
    template: ''
})
export abstract class WidgetBaseComponent<T> {

    abstract setData(data: T): T;

    abstract getData(): Promise<T>;
}