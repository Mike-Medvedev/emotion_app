import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emotion-selector',
  templateUrl: './emotion-selector.component.html',
  styleUrls: ['./emotion-selector.component.css'],
})
export class EmotionSelectorComponent implements OnInit {
  emotionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emotionForm = this.fb.group({});
  }

  ngOnInit() {
    this.emotionForm = this.fb.group({
      emotion: [null, Validators.required],
    });
  }
}
