import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css'],
})
export class ParentToChildComponent {
  courseDetails: any = [];

  @Input() set cName(cDetails: any) {
    console.log(cDetails);
    if (Object.keys(cDetails).length > 0) {
      this.courseDetails.push(cDetails);
      console.log(this.courseDetails);
    }
  }
  @Input() recFinished: any;
}
