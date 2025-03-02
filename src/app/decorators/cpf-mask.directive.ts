import { Directive, ElementRef, HostListener, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCpfMask]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CpfMaskDirective),
      multi: true,
    },
  ],
})
export class CpfMaskDirective implements ControlValueAccessor, OnInit {
  private onChange: any = () => {};
  private onTouched: any = () => {};
  private value: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string) {
    this.applyMask(value);
    this.onChange(this.value);
  }
  @HostListener('blur')
    onBlur() {
        this.onTouched();
    }

  applyMask(value: string) {
    let numericValue = value.replace(/\D/g, '');
    let formattedValue = '';

    if (numericValue.length > 0) {
      formattedValue = numericValue.substring(0, 3);
    }
    if (numericValue.length > 3) {
      formattedValue += '.' + numericValue.substring(3, 6);
    }
    if (numericValue.length > 6) {
      formattedValue += '.' + numericValue.substring(6, 9);
    }
    if (numericValue.length > 9) {
      formattedValue += '-' + numericValue.substring(9, 11);
    }
    this.value = formattedValue;
    this.el.nativeElement.value = formattedValue;

  }

  writeValue(value: any): void {
    if (value) {
        this.applyMask(value);
    } else {
        this.value = '';
        this.el.nativeElement.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }


   @HostListener('keydown.backspace', ['$event'])
    onKeyDown(event: KeyboardEvent) {
    }
}
