import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  lastLessonId: number|null = null;

  constructor() { }
}
