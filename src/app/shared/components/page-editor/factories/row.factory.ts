import { Widget } from "../models/widget.model";
import { WidgetFactory } from "./widget.factory";

export class RowWidgetFactory implements WidgetFactory {
    template: string = `
        <div class="row">
            #content
        </div>
    `;

    buildHTML(widget: Widget): string {
        return this.template;
    }

}