import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IntranetDialogWithFormComponent } from '@shared_components/dialog-with-form/dialog-with-form.component';
import { DefaultPropertiesComponent } from '@shared_core/decorators/default-values-component.decorator';
import { ToolService } from '@shared_core/services/core.service';
import { Constants } from '@shared_models/constants.model';
import { WidgetBaseComponent } from '@shared_utils/index';
import { WidgetDropdownComponent } from '@shared_widgets/dropdown/dropdown.component';

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
    objFeatureModel = new FeatureModel();

    @ViewChild(IntranetDialogWithFormComponent, { static: true }) dialogContent: IntranetDialogWithFormComponent;
    @ViewChild(WidgetDropdownComponent, { static: true }) select: WidgetDropdownComponent<FeatureModel>;

    constructor(
        private toolsService: ToolService,
        public dialogRef: MatDialogRef<FeatureEditComponent>,
        @Inject(MAT_DIALOG_DATA) private objEdit: FeatureModel
    ) {
        super();
    }

    ngOnInit() {
        this.select.setData([
            new FeatureModel({ IdCatalog: "1", Name: "Opcion 1", Description: "Desc 1", }),
            new FeatureModel({ IdCatalog: "2", Name: "Opcion 2", Description: "Desc 2", }),
            new FeatureModel({ IdCatalog: "3", Name: "Opcion 3", Description: "Desc 3", }),
            new FeatureModel({ IdCatalog: "4", Name: "Opcion 4", Description: "Desc 4", }),
            new FeatureModel({ IdCatalog: "5", Name: "Opcion 5", Description: "Desc 5", }),
            new FeatureModel({ IdCatalog: "6", Name: "Opcion 6", Description: "Desc 6", }),
            new FeatureModel({ IdCatalog: "7", Name: "Opcion 7", Description: "Desc 7", }),
            new FeatureModel({ IdCatalog: "8", Name: "Opcion 8", Description: "Desc 8", }),
        ]);
    }

    changeDropdown($event) {
        console.log($event);
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