import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css'],
})
export class ChildToParentComponent {
  @Output() parentFunc = new EventEmitter<string>();

  courses = [
    { courseId: 1, name: 'Node JS' },
    { courseId: 2, name: 'React JS' },
    { courseId: 3, name: 'Angular JS' },
    { courseId: 4, name: 'Typescript JS' },
  ];

  register(courseName: string) {
    this.parentFunc.emit(courseName);
  }
}
