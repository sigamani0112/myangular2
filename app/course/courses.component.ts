import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'
import {Course} from './course'


@Component({ 
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        Add new courses <input #newCourse newCourse.value='' (keyup.enter)="addNewCourse(newCourse.value)"
        (blur)="addNewCourse(newCourse.value)" >
        <button (click)="addNewCourse(newCourse.value)">Add</button><br><br>
            <input #box (keyup)="0">
            <p>{{box.value}}</p><br><br>
            <input (keyup)="onKey($event)">
            <p>{{values}}</p><br><br>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
                {{course.name}}     <button (click)="onClickMe(course.name)">Click me!</button>
            </li>
        </ul>
        {{clickMessage}}
        `,
    providers:[CoursesService]    

})
export class CoursesComponent {
    title = "The title of the courses"; 
    courses ;
    clickMessage ;
    constructor(coursesService:CoursesService){
        this.courses = coursesService.getCourses();
    }

    onClickMe(key:any){
        this.clickMessage = key;
    }
    count = 13;
    addNewCourse(newCourse:any){
        if(newCourse){
            this.courses.push(new Course(this.count++,newCourse));
            newCourse = '';
        }
    }
    values = '';
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
    
}