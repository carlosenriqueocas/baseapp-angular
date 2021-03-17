import { NgModule } from '@angular/core';
import { EditorComponent } from './views/new/editor.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorListComponent } from './views/list/editor-list.component';
import { GrapesJSModule } from '../../shared/components/grapesjs/grapesjs.module';
import { PageEditorModule } from '../../shared/components/page-editor/page-editor.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: EditorListComponent,
            },
            {
                path: 'new',
                component: EditorComponent
            },
            // {
            //     path: 'edit/:id',
            //     component: EditEditorComponent
            // }
        ]),
        GrapesJSModule
    ],
    exports: [],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
