import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageEditorModule } from '../../shared/components/page-editor/page-editor.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: EditorComponent,
            },
        ]),
        PageEditorModule
    ],
    exports: [],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
