import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CoreModule } from '../core/core.module';

import { WidgetImgS3Component } from './img-s3/img-s3.component';
import { WidgetInputTypeFileComponent } from './input-type-file/input-type-file.component';
import { WidgetSelectGroupComponent } from './select-group/select-group.component';
import { WidgetSelectWithPromiseComponent } from './select-promise/select-with-promise.component';
import { WidgetSelectTreeComponent } from './select-tree/select-tree.component';
import { WidgetSvgIconComponent } from './svg-icon/svg-icon.component';
import { WidgetInputText } from './input-text/input-text.component';
import { WidgetDropdown } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatProgressSpinnerModule,
    FormsModule,
    OverlayModule,
  ],
  declarations: [
    WidgetImgS3Component,
    WidgetInputTypeFileComponent,
    WidgetSelectGroupComponent,
    //WidgetSelectWithPromiseComponent,
    WidgetSelectTreeComponent,
    WidgetSvgIconComponent,

    WidgetInputText,
    WidgetDropdown
  ],
  exports: [
    WidgetImgS3Component,
    WidgetInputTypeFileComponent,
    WidgetSelectGroupComponent,
    //WidgetSelectWithPromiseComponent,
    WidgetSelectTreeComponent,
    WidgetSvgIconComponent,

    WidgetInputText,
    WidgetDropdown
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WidgetInputText),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WidgetDropdown),
      multi: true
    }
  ]
})
export class WidgetsModule { }
