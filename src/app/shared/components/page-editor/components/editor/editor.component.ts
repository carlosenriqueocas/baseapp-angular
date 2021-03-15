import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { Widget, WidgetType } from '../../models/widget.model';
import { WidgetFactory } from '../../factories/widget.factory';
import { ImageWidgetFactory } from '../../factories/image.factory';
import { WidgetUtil } from '../../utils/editor.util';

@Component({
    selector: 'editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
    public listIdsWhereDrop: string[];
    public factory: WidgetFactory;

    @Input() widget: Widget;
    @Input() parentWidget?: Widget;
    @Input() public set connectListIdsWhereDrop(ids: string[]) {
        this.listIdsWhereDrop = ids;
    }

    @Output() itemDrop: EventEmitter<CdkDragDrop<Widget>>;

    @ViewChildren(EditorComponent) children: EditorComponent[];

    constructor() {
        this.listIdsWhereDrop = [];
        this.itemDrop = new EventEmitter();
    }

    ngOnInit() {
        this.factory = WidgetUtil.getFactory(this.widget);
    }

    public get connectToIdsWhereCanDrop(): string[] {
        return this.listIdsWhereDrop.filter((id) => id !== this.widget.id);
    }

    public get hasParentWidget(): boolean {
        return !!this.parentWidget;
    }

    public get parentWidgetId(): string {
        return this.hasParentWidget ? this.parentWidget.id : '';
    }

    /* Methods */

    public onDragDrop(event: CdkDragDrop<Widget, Widget>): void {
        this.itemDrop.emit(event);
    }

    public addWidget(widget: Widget) {
        this.widget.children.push(widget);
    }

    public getHTML(): string {
        return WidgetUtil.getHTML(this.factory, this.widget, this.children);
    }

    public openSettings() {
        console.log("Open Editor");
    }
}