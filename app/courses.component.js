System.register(['angular2/core', './courses.service', './course'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_service_1, course_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (course_1_1) {
                course_1 = course_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(coursesService) {
                    this.title = "The title of the courses";
                    this.count = 13;
                    this.courses = coursesService.getCourses();
                }
                CoursesComponent.prototype.onClickMe = function (key) {
                    this.clickMessage = key;
                };
                CoursesComponent.prototype.addNewCourse = function (newCourse) {
                    if (newCourse) {
                        this.courses.push(new course_1.Course(this.count++, newCourse));
                        newCourse = '';
                    }
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Courses</h2>\n        Add new courses <input #newCourse newCourse.value=''><button (click)=\"addNewCourse(newCourse.value)\">Add</button><br><br>\n        {{title}}\n        <ul>\n            <li *ngFor=\"#course of courses\">\n                {{course.name}}     <button (click)=\"onClickMe(course.name)\">Click me!</button>\n            </li>\n        </ul>\n        {{clickMessage}}\n        ",
                        providers: [courses_service_1.CoursesService]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map