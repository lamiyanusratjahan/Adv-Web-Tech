import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultiesRepo: Repository<Faculty>,
  ) {}
 
  async createFaculty(faculty: CreateFacultyDto): Promise<Faculty> {
    const exists = await this.facultiesRepo.findOneBy({ Id: faculty.Id });
    if (exists) {
      throw new BadRequestException('Faculty with this Id already exists');
    }
 
    try {
      const facultyEntity = this.facultiesRepo.create(faculty);
      return await this.facultiesRepo.save(facultyEntity);
    } catch (error) {
      console.log( error);
      throw new BadRequestException('Failed to create instance');
    }
  }
 
  async getAllFaculties(): Promise<Faculty[]> {
    return await this.facultiesRepo.find({
      select: {
        Id: true,
        Name: true,
        expertise: true,
        noOfPublication: true,
        deleteFaculty: true,
      },
      withDeleted: true,
    });
  }
 
  async getFacultyById(id: string): Promise<Faculty | null> {
    return await this.facultiesRepo.findOne({
      where: {
        Id: id,
      },
      select: {
        Id: true,
        Name: true,
        expertise: true,
        noOfPublication: true,
      },
    });
  }
 
  async deleteFaculty(id: string): Promise<string> {
    const result = (await this.facultiesRepo.delete(id)).affected;
    if (result != null && result > 0) {
      return `faculty deleted with id ${id}`;
    } else {
      throw new BadRequestException('Faculty not found');
    }
  }
 
  async deleteFacultySoft(id: string): Promise<string> {
    const result = (await this.facultiesRepo.softDelete(id)).affected;
    if (result != null && result > 0) {
      return `faculty soft deleted with id ${id}`;
    } else {
      throw new BadRequestException('Faculty not found');
    }
  }
 
  async replaceFaculty(id: string, faculty: UpdateFacultyDto): Promise<string> {
    try {
      const res = (await this.facultiesRepo.update(id, faculty)).affected;
      if (res != undefined && res > 0) {
        return `faculty replaced with id ${id}`;
      } else {
        return `faculty with id ${id} not found`;
      }
    } catch {
      throw new BadRequestException('Faculty not Found');
    }
  }
 
  async updateFaculty(id: string, faculty: UpdateFacultyDto): Promise<string> {
    try {
      const res = (await this.facultiesRepo.update(id, faculty)).affected;
      if (res != undefined && res > 0) {
        return `faculty updated with id ${id}`;
      } else {
        return `faculty with id ${id} not found`;
      }
    } catch {
      throw new BadRequestException('Faculty not Found');
    }
  }
}