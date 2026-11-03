import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollmentService: EnrollmentService) {}

    @Post()
    enrollStudent(@Body() body: { studentName: string; courseId: string }) {
        return this.enrollmentService.enrollStudent(body.studentName, body.courseId);
    }

    @Get()
    getEnrollments() {
        return this.enrollmentService.getEnrollments();
    }
    }
