import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { UpdateFacultyDto } from './dto/update-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Get(':id')
  async getFacultyById(@Param('id') id: string): Promise<Faculty | null> {
    return await this.facultiesService.getFacultyById(id);
  }

  @Get()
  async getAllFaculties(): Promise<Faculty[]> {
    return await this.facultiesService.getAllFaculties();
  }

  @Delete(':id')
  async deleteFacultyById(
    @Param('id')
    id: string,
  ): Promise<string> {
    return await this.facultiesService.deleteFaculty(id);
  }

  @Delete('soft/:id')
  async deleteFacultyByIdSoft(
    @Param('id')
    id: string,
  ): Promise<string> {
    return await this.facultiesService.deleteFacultySoft(id);
  }

  @Post('create-faculty')
  async createFaculty(@Body() faculty: CreateFacultyDto): Promise<Faculty> {
    return await this.facultiesService.createFaculty(faculty);
  }

  @Put('updateFacultyFully/:id')
  async updateFacultyFully(
    @Param('id') id: string,
    @Body() faculty: UpdateFacultyDto,
  ): Promise<string> {
    return await this.facultiesService.replaceFaculty(id, faculty);
  }

  @Patch('updateFacultyPartially/:id')
  async updateFacultyPartially(
    @Param('id') id: string,
    @Body() faculty: UpdateFacultyDto,
  ): Promise<string> {
    return await this.facultiesService.updateFaculty(id, faculty);
  }
}