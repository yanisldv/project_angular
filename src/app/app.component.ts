import { Component } from '@angular/core';
import { LessonPackage } from './lesson-package'; // Assurez-vous de spécifier le chemin correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD3_angular';
  lessonPackage: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };
  prerequisiteInput: string = '';
  tagInput: string = '';

  addPrerequisite() {
    this.lessonPackage.prerequisite.push(this.prerequisiteInput);
    this.prerequisiteInput = '';
  }

  addTag() {
    this.lessonPackage.tags.push(this.tagInput);
    this.tagInput = '';
  }
}