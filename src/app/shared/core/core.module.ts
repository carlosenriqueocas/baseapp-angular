import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SafePipe } from './pipes/safe.pipe';

import { SweetAlertService } from './services/sweet-alert.service';
import { CoreService } from './services/core.service';

@NgModule({
  declarations: [FirstLetterPipe, SafePipe],
  imports: [CommonModule],
  providers: [SweetAlertService, CoreService],
  exports: [FirstLetterPipe, SafePipe],
})
export class CoreModule { }
