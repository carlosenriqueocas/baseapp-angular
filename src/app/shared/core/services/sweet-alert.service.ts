import { Injectable, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import sweetalert from "sweetalert2";

import { Enumerador } from '../../models/enumerador.model';

@Injectable()
export class SweetAlertService {


    constructor(
        private sanitizer: DomSanitizer
    ) {
    }

    show(status: number, message: string) {
        return sweetalert.fire({
            title: this.getTitle(message),
            html: this.sanitizer.sanitize(SecurityContext.HTML, message),
            icon: this.getIcon(status),
            confirmButtonText: 'Ok'
        });
    }

    private getTitle(message: string) {
        if (message === Enumerador.STATUS_MESSAGES.Success) return 'Éxito';
        if (message === Enumerador.STATUS_MESSAGES.Warning) return 'Advertencia!';
        if (message === Enumerador.STATUS_MESSAGES.Error) return 'Error!';

        return 'Éxito';
    }

    private getIcon(status: number) {
        if (status === Enumerador.STATUS.Success) return 'success';
        if (status === Enumerador.STATUS.Warning) return 'warning';
        if (status === Enumerador.STATUS.Error) return 'error';

        return 'success';
    }

}