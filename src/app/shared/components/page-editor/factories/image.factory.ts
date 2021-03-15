import { Widget } from '../models/widget.model';
import { WidgetFactory } from './widget.factory';

export class ImageWidgetFactory implements WidgetFactory {

    template: string = `
    <div class="card">
        <img src="#src" class="card-img">
        <div class="card-img-overlay">
            #content
        </div>
    </div>`;

    buildHTML(widget: Widget): string {
        return this.template.replace('#src', widget.value);
    }

}