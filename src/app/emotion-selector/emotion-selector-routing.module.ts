import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionSelectorComponent } from './emotion-selector.component';

const routes: Routes = [{ path: '', component: EmotionSelectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmotionSelectorRoutingModule {}
