import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CoreModule } from '../core/core.module';

import { WidgetImgS3Component } from './img-s3/img-s3.component';
import { WidgetInputTypeFileComponent } from './input-type-file/input-type-file.component';
import { WidgetSelectGroupComponent } from './select-group/select-group.component';
import { WidgetSelectWithPromiseComponent } from './select-promise/select-with-promise.component';
import { WidgetSelectTreeComponent } from './select-tree/select-tree.component';
import { WidgetSvgIconComponent } from './svg-icon/svg-icon.component';
import { SelectPromiseWithTemplateModule } from './select-promise-with-template/select-promise-with-template.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatProgressSpinnerModule,
    FormsModule,
    OverlayModule,

    SelectPromiseWithTemplateModule
  ],
  declarations: [
    WidgetImgS3Component,
    WidgetInputTypeFileComponent,
    WidgetSelectGroupComponent,
    WidgetSelectWithPromiseComponent,
    WidgetSelectTreeComponent,
    WidgetSvgIconComponent
  ],
  exports: [
    WidgetImgS3Component,
    WidgetInputTypeFileComponent,
    WidgetSelectGroupComponent,
    WidgetSelectWithPromiseComponent,
    WidgetSelectTreeComponent,
    WidgetSvgIconComponent,

    SelectPromiseWithTemplateModule
  ],
})
export class WidgetsModule { }
