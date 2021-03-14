import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: EditorComponent,
            },
        ]),
    ],
    exports: [],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
