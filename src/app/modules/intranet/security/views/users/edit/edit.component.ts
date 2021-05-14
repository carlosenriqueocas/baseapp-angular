import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IntranetDialogWithFormComponent } from '@shared_components/dialog-with-form/dialog-with-form.component';
import { DefaultPropertiesComponent } from '@shared_core/decorators/default-values-component.decorator';
import { ToolService } from '@shared_core/services/core.service';
import { Constants } from '@shared_models/constants.model';
import { WidgetBaseComponent } from '@shared_utils/index';

import { FeatureModel } from '../../../models/feature.model';

@DefaultPropertiesComponent({
    title: 'Caracteristicas',
    description: 'Descripcion',
    icon: 'money'
})
@Component({
    selector: 'intranet-maintainer-feature-edit',
    templateUrl: './edit.component.html'
})

export class FeatureEditComponent extends WidgetBaseComponent implements OnInit {
    obj: FeatureModel = new FeatureModel();

    @ViewChild(IntranetDialogWithFormComponent, { static: true }) dialogContent: IntranetDialogWithFormComponent;

    constructor(
        private toolsService: ToolService,
        public dialogRef: MatDialogRef<FeatureEditComponent>,
        @Inject(MAT_DIALOG_DATA) private objEdit: FeatureModel
    ) {
        super();
    }

    ngOnInit() {
    }

    async save(): Promise<void> {
        if (this.dialogContent.isValidateForm()) {
            this.toolsService.sweetAlert.show(Constants.STATUS.Success, 'Campos Correctos');
        } else {
            this.toolsService.sweetAlert.show(Constants.STATUS.Warning, 'Complete todos los campos');
        }
    }

    changeLogoFile(files: File[]) {
        if (files.length == 1) {
            let file = files[0];
            this.obj.iconFile = file;
        }
    }

}