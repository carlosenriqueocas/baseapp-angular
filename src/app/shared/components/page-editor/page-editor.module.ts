import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageEditorComponent } from './page-editor.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule
    ],
    declarations: [PageEditorComponent, EditorComponent],
    providers: [],
    exports: [
        PageEditorComponent
    ]
})
export class PageEditorModule { }
