import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionSelectorControlComponent } from './emotion-selector-control.component';

describe('EmotionSelectorControlComponent', () => {
  let component: EmotionSelectorControlComponent;
  let fixture: ComponentFixture<EmotionSelectorControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionSelectorControlComponent],
    });
    fixture = TestBed.createComponent(EmotionSelectorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
