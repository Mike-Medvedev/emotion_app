import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'emotion_selector',
    loadChildren: () =>
      import('./emotion-selector/emotion-selector.module').then(
        (m) => m.EmotionSelectorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
