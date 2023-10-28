import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-emotion-selector-control',
  templateUrl: './emotion-selector-control.component.html',
  styleUrls: ['./emotion-selector-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmotionSelectorControlComponent),
      multi: true,
    },
  ],
})
export class EmotionSelectorControlComponent implements ControlValueAccessor {
  selectedEmotion: string = '';

  writeValue(value: any) {
    this.selectedEmotion = value;
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setEmotion(emotion: string) {
    this.selectedEmotion = emotion;
    this.onChange(emotion);
    this.onTouched();
  }
}
