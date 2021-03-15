import { WidgetFactory } from '../factories/widget.factory';
import { Widget, WidgetType } from '../models/widget.model';
import { ImageWidgetFactory } from '../factories/image.factory';
import { EditorComponent } from '../components/editor/editor.component';
import { ContainerWidgetFactory } from '../factories/container.factory';
import { ParagraphWidgetFactory } from '../factories/paragraph.factory';
import { RowWidgetFactory } from '../factories/row.factory';

export class WidgetUtil {


    static getFactory(widget: Widget): WidgetFactory {
        if (widget.type == WidgetType.div)
            return new ContainerWidgetFactory();

        if (widget.type == WidgetType.img)
            return new ImageWidgetFactory();

        if (widget.type == WidgetType.p)
            return new ParagraphWidgetFactory();

        if (widget.type == WidgetType.row)
            return new RowWidgetFactory();

    }

    static getHTML(factory: WidgetFactory, widget: Widget, children: EditorComponent[]) {
        let html = factory.buildHTML(widget);
        if (widget.canHasChildren && widget.children.length > 0 && children.length > 0) {
            html = html.replace("#content", WidgetUtil.getPlainHTML(children.map(ch => ch.getHTML())));
        } else {
            html = html.replace("#content", '');
        }
        return html;
    }

    static getPlainHTML(data: string[]): string {
        if (data.length > 0) {
            let c = '';
            data.map(s => c = c + s);
            return c;
        } else {
            return '';
        }
    }
}