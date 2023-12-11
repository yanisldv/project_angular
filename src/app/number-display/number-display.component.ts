import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  template: '<div> display value component: {{value}} </div>'
 })
 export class NumberDisplayComponent {
  @Input()
  value: number = 0;
 }
