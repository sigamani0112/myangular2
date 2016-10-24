System.register(['./course'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var course_1;
    var CoursesService;
    return {
        setters:[
            function (course_1_1) {
                course_1 = course_1_1;
            }],
        execute: function() {
            CoursesService = (function () {
                function CoursesService() {
                }
                CoursesService.prototype.getCourses = function () {
                    return [new course_1.Course(12, "Tamil"),
                        new course_1.Course(13, "English"),
                        new course_1.Course(14, "Maths"),
                        new course_1.Course(15, "Science"),
                        new course_1.Course(16, "Social Science")];
                };
                return CoursesService;
            }());
            exports_1("CoursesService", CoursesService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map