import { Injectable } from '@angular/core';

import { SweetAlertService } from './sweet-alert.service';

import * as utils from "../../utils/types-convertion.utils";

@Injectable()
export class CoreService {

    tools = utils;

    constructor(
        public sweetAlert: SweetAlertService
    ) { }

}