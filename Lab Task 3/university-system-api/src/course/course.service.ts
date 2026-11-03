import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() {
        return{Message: 'All courses fetched successfully', data: []};
}

getCourseById(id: string) {
    return {Message: `Coursefetched successfully`, id};
}

createCourse(name: string, code: string) {
    return {Message: `Course created successfully`,data: {name, code}};
}
}