import { Component, OnInit, Optional, Self, ViewChild, DoCheck, Input } from '@angular/core';
import { ControlValueAccessor, NgControl, NgModel } from '@angular/forms';
import { CustomValidators } from '@shared_core/directives/validators/ngmodel.validator';

@Component({
    selector: 'widget-input-text',
    templateUrl: './input-text.component.html',
})

export class WidgetInputText implements ControlValueAccessor, OnInit, DoCheck {

    private _value: string = '';

    @Input() required: boolean = true;
    @Input() validations: string[] = [];
    @Input() label: string = 'label';
    @Input() name: string = 'name';

    @ViewChild("inputNgModel") inputNgModel: NgModel;

    constructor(
        //@Optional() @Self() public validators: Array<Validator | ValidatorFn>,
        @Optional() @Self() public ngControl: NgControl
    ) {
        this.ngControl.valueAccessor = this;
        this.ngControl.control.setValidators(CustomValidators.createListValidators(this.required, this.validations));
    }

    ngOnInit() { }

    ngDoCheck() {
        if (this.ngControl.touched) {
            this.inputNgModel.control.markAsTouched();
        }
    }

    get value() {
        return this._value;
    }

    set value(newValue: string) {
        if (newValue != this._value) {
            this._value = newValue;
            this.onChange(newValue);
            this.onTouch(newValue);
        }
    }

    writeValue(value: string) {
        this._value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    onChange: any = () => { }
    onTouch: any = () => { }
}