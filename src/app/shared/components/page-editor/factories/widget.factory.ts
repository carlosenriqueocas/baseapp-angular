import { Widget } from '../models/widget.model';

export interface WidgetFactory {
    template: string;
    buildHTML(widget: Widget): string;
}