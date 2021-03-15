import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '../../models/widget.model';

@Component({
    selector: 'editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
    public listIdsWhereDrop: string[];

    @Input() widget: Widget;
    @Input() parentWidget?: Widget;
    @Input() public set connectListIdsWhereDrop(ids: string[]) {
        this.listIdsWhereDrop = ids;
    }

    @Output() itemDrop: EventEmitter<CdkDragDrop<Widget>>

    constructor() {
        this.listIdsWhereDrop = [];
        this.itemDrop = new EventEmitter();
    }

    ngOnInit() { }

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
}