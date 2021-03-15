import { NgModule } from '@angular/core';
import { EditorComponent } from './views/new/editor.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageEditorModule } from '../../shared/components/page-editor/page-editor.module';
import { EditorListComponent } from './views/list/editor-list.component';

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
        PageEditorModule
    ],
    exports: [],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
