import { Widget } from '../models/widget.model';
import { WidgetFactory } from './widget.factory';

export class ParagraphWidgetFactory implements WidgetFactory {

    template: string = `
    <p>#text</p>
    `;

    buildHTML(widget: Widget): string {
        return this.template.replace('#text', widget.value);
    }

}