import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Widget, WidgetType } from './models/widget.model';

@Component({
    selector: 'page-editor',
    templateUrl: 'page-editor.component.html'
})

export class PageEditorComponent implements OnInit {
    container: Widget;

    constructor() {
        this.container = new Widget('Container', WidgetType.div, 'Container', true);
        this.container.children.push(new Widget('Parrafo', WidgetType.p, 'HOLA MUNDO', false));
        this.container.children.push(new Widget('Parrafo', WidgetType.p, 'HOLA MUNDO 2', false));
    }

    ngOnInit() { }

    public get listIdsWhereDrop(): string[] {
        // We reverse ids here to respect items nesting hierarchy
        return this.getIdsRecursive(this.container).reverse();
    }

    private getIdsRecursive(item: Widget): string[] {
        let ids = [item.id];
        item.children.forEach((childWidget) => { ids = ids.concat(this.getIdsRecursive(childWidget)) });
        return ids;
    }

    public onDragDrop(event: CdkDragDrop<Widget>) {
        event.container.element.nativeElement.classList.remove('active');
        if (this.canBeDropped(event)) {
            const movingItem: Widget = event.item.data;
            event.container.data.children.push(movingItem);
            event.previousContainer.data.children = event.previousContainer.data.children.filter((child) => child.id !== movingItem.id);
        } else {
            moveItemInArray(
                event.container.data.children,
                event.previousIndex,
                event.currentIndex
            );
        }
    }

    private canBeDropped(event: CdkDragDrop<Widget, Widget>): boolean {
        const movingItem: Widget = event.item.data;

        return event.previousContainer.id !== event.container.id
            && this.isNotSelfDrop(event)
            && !this.hasChild(movingItem, event.container.data);
    }

    private isNotSelfDrop(event: CdkDragDrop<Widget> | CdkDragEnter<Widget> | CdkDragExit<Widget>): boolean {
        return event.container.data.id !== event.item.data.id;
    }

    private hasChild(parentItem: Widget, childItem: Widget): boolean {
        const hasChild = parentItem.children.some((item) => item.id === childItem.id);
        return hasChild ? true : parentItem.children.some((item) => this.hasChild(item, childItem));
    }

}