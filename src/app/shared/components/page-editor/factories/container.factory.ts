import { Widget } from "../models/widget.model";
import { WidgetFactory } from "./widget.factory";

export class ContainerWidgetFactory implements WidgetFactory {
    template: string = `
        <div class="container">
            #content
        </div>
    `;

    buildHTML(widget: Widget): string {
        return this.template;
    }

}