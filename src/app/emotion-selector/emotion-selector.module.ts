import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { EmotionSelectorRoutingModule } from './emotion-selector-routing.module';
import { EmotionSelectorComponent } from './emotion-selector.component';
import { EmotionValuePipe } from '../emotion-value.pipe';
import { EmotionSelectorControlComponent } from '../emotion-selector-control/emotion-selector-control.component';

@NgModule({
  declarations: [
    EmotionSelectorComponent,
    EmotionValuePipe,
    EmotionSelectorControlComponent,
  ],
  imports: [
    CommonModule,
    EmotionSelectorRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
  ],
})
export class EmotionSelectorModule {}
