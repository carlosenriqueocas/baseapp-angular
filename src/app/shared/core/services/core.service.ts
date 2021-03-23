import { Injectable } from '@angular/core';

import { SweetAlertService } from './sweet-alert.service';

@Injectable()
export class CoreService {

    constructor(
        public sweetAlert: SweetAlertService
    ) { }

}