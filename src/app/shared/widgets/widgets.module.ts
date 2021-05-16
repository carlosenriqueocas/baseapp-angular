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
import { WidgetInputTextComponent } from './input-text/input-text.component';
import { WidgetDropdownComponent } from './dropdown/dropdown.component';

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
    WidgetSelectWithPromiseComponent, // DELETE
    WidgetSelectTreeComponent,
    WidgetSvgIconComponent,

    WidgetInputTextComponent,
    WidgetDropdownComponent
  ],
  exports: [
    WidgetImgS3Component,
    WidgetInputTypeFileComponent,
    WidgetSelectGroupComponent,
    WidgetSelectWithPromiseComponent, //DELETE
    WidgetSelectTreeComponent,
    WidgetSvgIconComponent,

    WidgetInputTextComponent,
    WidgetDropdownComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WidgetInputTextComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WidgetDropdownComponent),
      multi: true
    }
  ]
})
export class WidgetsModule { }
