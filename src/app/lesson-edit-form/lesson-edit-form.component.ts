import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
  lessonForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['',Validators.required],
      level: ['',Validators.required],
      prerequisite: ['',Validators.required],
      tags: ['',Validators.required],
      copyright: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}
