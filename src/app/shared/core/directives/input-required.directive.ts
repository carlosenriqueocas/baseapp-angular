import { Directive, ElementRef, Renderer2, OnInit, Input, OnDestroy, HostBinding, HostListener, AfterViewInit } from '@angular/core';
import { AbstractControl, NgModel, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({ selector: '[input-safe]' })
export class InputRequiredDirective implements OnInit, AfterViewInit, OnDestroy {

    parent: HTMLElement;
    superParent: HTMLElement;
    divErrors: any;
    subscription: Subscription;

    //'required' | 'min-x' | 'max-x' | 'email'    
    @Input() validators: string[] = [];
    @Input() validatorsOther: string[] = [];
    @Input() asterisk: boolean = true;
    @Input() sanitizer: boolean = true;
    @Input() skipUnsafeCharacters: string[] = [];

    private defaultValidators: string[] = ['required', 'min-2', 'max-100'];
    private unsafeCharacters: Map<string, RegExp> = new Map();

    constructor(
        private el: ElementRef,
        private ngModel: NgModel,
        private render: Renderer2) {

        this.initUnsafeCharacters();
        this.configParentSuperParent();
    }

    initUnsafeCharacters() {
        this.unsafeCharacters.set("<", /\</g);
        this.unsafeCharacters.set(">", /\>/g);
        this.unsafeCharacters.set("/", /\//g);
        this.unsafeCharacters.set("\\", /\\/g);
        this.unsafeCharacters.set("'", /\'/g);
        this.unsafeCharacters.set("\"", /\"/g);
        this.unsafeCharacters.set("=", /\=/g);
    }

    ngAfterViewInit() {
        this.initValidators();
        this.createDivErrors();

        if ((this.validators.length > 0 ? this.validators : this.defaultValidators).includes('required')) this.addAsterisk();
        this.skipUnsafeCharacters?.forEach(c => this.unsafeCharacters.delete(c));
    }

    ngOnInit() {
        if (this.sanitizer) {
            this.subscription = this.ngModel.valueChanges.subscribe(response => {
                if (response && typeof response == 'string') {
                    //let safeValue = String(response).trimStart().replace(/\</g, '').replace(/\>/g, '').replace(/\//g, '').replace(/\\/g, '').replace(/\'/g, '').replace(/\"/g, '').replace(/\=/g, '');
                    let safeValue = String(response).trimStart();
                    this.unsafeCharacters.forEach(m => safeValue = safeValue.replace(m, ''));
                    if (safeValue != response) {
                        //this.ngModel.reset(safeValue);
                        this.ngModel.control.setValue(safeValue, { emitEvent: false });
                    }
                }
            });
        }
    }

    private initValidators() {
        let _validators = [];

        (this.validators.length > 0 ? this.validators : this.defaultValidators).forEach(v => {
            if (v == 'required') _validators.push(Validators.required);
            if (v.indexOf('min-') != -1) _validators.push(Validators.minLength(parseInt(v.split('-')[1])));
            if (v.indexOf('max-') != -1) {
                _validators.push(Validators.maxLength(parseInt(v.split('-')[1])));
                (<HTMLElement>this.el.nativeElement).setAttribute('maxlength', String(parseInt(v.split('-')[1])));
            };
        });

        this.validatorsOther.forEach(v => {
            if (v == 'email') _validators.push(Validators.email);
            if (v == 'decimal') _validators.push(this.isDecimal);
            if (v == 'password-secure') _validators.push(this.isPasswordSecure);
        });

        this.ngModel.control.setValidators(_validators);
    }

    @HostBinding('class.is-invalid') get onTouch() {
        return this.ngModel.touched && !this.ngModel.disabled && this.ngModel.invalid;
    }

    @HostListener('focus', ['$event.target'])
    @HostListener('blur', ['$event.target'])
    @HostListener('keyup', ['$event.target'])
    onEvent(target: HTMLElement) {
        this.ngModel.control.updateValueAndValidity();

        if (this.ngModel.disabled) {
            return;
        }

        if (this.ngModel.invalid) {
            this.render.addClass(target, 'is-invalid');

            if (this.parent.classList.contains('input-group')) {
                this.render.addClass(this.superParent, 'validated');
            }

            if (this.ngModel.errors.required)
                this.render.setProperty(this.divErrors, 'innerHTML', `Campo requerido`);

            if (this.ngModel.errors.minlength) {
                const minLength = this.ngModel.errors.minlength.requiredLength;
                this.render.setProperty(this.divErrors, 'innerHTML', `Minimo ${minLength} caracteres`);
            }

            if (this.ngModel.errors.maxlength) {
                const minLength = this.ngModel.errors.maxlength.requiredLength;
                this.render.setProperty(this.divErrors, 'innerHTML', `Máximo ${minLength} caracteres`);
            }

            if (this.ngModel.errors.email)
                this.render.setProperty(this.divErrors, 'innerHTML', `Debe ingresar un correo electrónico`);

            if (this.ngModel.errors.decimal)
                this.render.setProperty(this.divErrors, 'innerHTML', `Debe ingresar un número decimal correcto. Ejm: 5.00`);

            if (this.ngModel.errors.secure)
                this.render.setProperty(this.divErrors, 'innerHTML', `Debe contener mayúsculas, minúsculas, números y/o caracteres especiales`);

        } else {
            this.render.removeClass(target, 'is-invalid');

            if (this.parent.classList.contains('input-group')) {
                this.render.removeClass(this.superParent, 'validated');
            }
        }
    }

    private configParentSuperParent() {
        this.parent = this.render.parentNode(this.el.nativeElement) as HTMLElement;
        if (this.parent.classList.contains('input-group')) this.superParent = this.parent.parentElement;
    }

    private addAsterisk() {

        if (!this.asterisk) return;

        let labelChild: ChildNode;

        if (this.parent.classList.contains('form-group'))
            labelChild = this.parent.firstChild;
        else if (this.parent.classList.contains('input-group'))
            labelChild = this.superParent.firstChild;

        labelChild.textContent = labelChild.textContent.replace(':', '') + ' ';;

        const spanAsterisk = this.render.createElement('span');
        this.render.addClass(spanAsterisk, 'text-danger');
        this.render.setProperty(spanAsterisk, 'innerHTML', '*');

        labelChild.appendChild(spanAsterisk);
    }

    private createDivErrors() {
        this.divErrors = this.render.createElement('div');
        this.render.addClass(this.divErrors, 'invalid-feedback');

        this.addDivErrorsToTarget();
    }

    private addDivErrorsToTarget() {
        // const target = this.el.nativeElement as HTMLElement;
        if (this.parent.classList.contains('form-group'))
            this.parent.append(this.divErrors);
        else if (this.parent.classList.contains('input-group')) {
            this.superParent.append(this.divErrors);
            this.render.addClass(this.superParent, 'validated');
        }
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }


    private get isDecimal(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let value = String(control.value);
            if (value == "0") return null;
            else return /^\d{1,10}(\.\d{1,2})?$/.test(value) ? null : { decimal: true };
            //else return /^\d{1,10}(\.\d{2})$/.test(value) ? null : { decimal: true };
            //return /^\d{1,10}(\.\d{1,2})?$/.test(value) ? null : { decimal: true };
        };
    }

    private get isPasswordSecure(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let value = String(control.value);
            if (!value) return null;

            let array = [];
            array[0] = value.match(/[A-Z]/);
            array[1] = value.match(/[a-z]/);
            array[2] = value.match(/\d/);
            array[3] = value.match(/[!"#$%&'()*+-./:;<=>?@^_`{|}~]/);

            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i] ? 1 : 0;
            }

            return sum < 4 ? { secure: true } : null;
        }
    }
}