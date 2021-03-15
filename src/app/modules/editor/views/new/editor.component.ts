import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageEditorComponent } from '../../../../shared/components/page-editor/page-editor.component';

@Component({
    selector: 'app-editor',
    templateUrl: 'editor.component.html'
})

export class EditorComponent implements OnInit {

    @ViewChild(PageEditorComponent) editor: PageEditorComponent;
    @ViewChild('container', { static: true }) container: ElementRef;

    constructor() { }

    ngOnInit() { }

    getHTML() {
        let html = this.editor.getHTML();
        this.container.nativeElement.innerHTML = html;
    }
}