import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo Application';
  show = true;
  orangeCol = 'orange';
  greenCol = 'green';
  smallText = '0.8rem';
  inputType = 'text';
  showMe = false;
  message = '';
  lastName = '';
  fullName = 'tara Spurgeon Gnan Prakasham';
  fName = 'Sam Raj';

  skills = ['html', 'css', 'js'];

  courses = [
    { courseId: 1, name: 'Node JS' },
    { courseId: 2, name: 'React JS' },
    { courseId: 3, name: 'Angular JS' },
    { courseId: 4, name: 'Typescript JS' },
  ];
  selectedCourse: any = {};
  recentlyFinished: any = 'nothing yet';

  setMessage(msg: string) {
    console.log(msg);

    this.message = msg;
    this.showMe = true;
  }

  setCourseDetails(id: any) {
    console.log(id);
    if (parseInt(id) !== 0) {
      this.selectedCourse = this.courses.filter(
        (c) => c.courseId === parseInt(id)
      )[0];
      console.log(this.selectedCourse);
      this.recentlyFinished = this.selectedCourse.name;
    }
  }
  displayRegisteredCourse(courseName: string) {
    alert('You have registered for course: ' + courseName);
  }
}
