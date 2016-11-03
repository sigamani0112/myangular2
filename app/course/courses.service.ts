import {Course} from './course'

export class CoursesService{
    getCourses() : Course[]{
       return  [
       new Course (12,"Tamil"),
       new Course (13,"English"),
       new Course (14,"Maths"),
       new Course (15,"Science"),
       new Course (16,"Social Science"),
       new Course (17,"Hindi")];
    } 
} 