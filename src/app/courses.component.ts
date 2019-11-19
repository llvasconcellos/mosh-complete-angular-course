import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
            <h2 [textContent]="title"></h2>
             <img src="{{ imageUrl }}" />
             <img [src]="imageUrl" />
            <ul>
              <li *ngFor="let course of courses; even as even; index as index">
              {{ even }} - {{ index }} - {{ course }}
              </li>
            </ul>
            <br/>
            {{ course.title | uppercase | lowercase }}<br/>
            {{ course.students | number }}<br/>
            {{ course.rating | number:'2.1-1' }}<br/>
            {{ course.price | currency:'BRL':true:'3.2-2' }}<br/>
            {{ course.releaseDate | date:'longDate' }}<br/>
            {{ course.description | summary:10 }}<br/>
            <table>
              <tr>
                <td [colSpan]="colSpan"></td>
              </tr>        
            </table>
            <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
            
            <div (click)="onDivClicked()">
              <button (click)="onSave($event)" class="btn btn-success" [style.border]="isActive ? 'solid 2px blue' : 'solid 2px red'">Save</button>
            </div>

            <input (keyup)="onKeyUp($event)" (keyup.enter)="onKeyUpEnter($event)" />

            <input #email (keyup.enter)="onKeyUpEmail(email)" />

            <input [value]="email2" (keyup.enter)="onKeyUpEmail2()" />

            <input [(ngModel)]="email2" (keyup.enter)="onKeyUpEmail2()" /><br/><br/>
            
            <input type="text" appInputFormat="lowercase" />
          `
})
export class CoursesComponent {
  private title = "List of Courses";
  private courses;
  private imageUrl = "http://lorempixel.com/400/200";
  private colSpan = 2;
  private isActive = true;
  private email2 = "leo.lima.web@gmail.com";
  private course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
    description: "lorem ipsum is simply dummy text of the printing and typeset bal bola bal lorem ipsum is simply dummy text of the printing and typeset bal bola bal lorem ipsum is simply dummy text of the printing and typeset bal bola bal "
  };

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUpEmail2(){
    console.log(this.email2);
  }

  onKeyUpEmail(email){
    console.log(email);
    console.log(email.value);
  }

  onDivClicked($event){
    console.log("Div was clicked", $event);
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onKeyUp($event){
      console.log(`${$event.keyCode} was pressed`);
  }

  onKeyUpEnter($event){
      console.log("ENTER was pressed");
  }
}