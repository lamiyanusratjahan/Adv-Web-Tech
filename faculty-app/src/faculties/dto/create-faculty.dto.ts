import { Type } from 'class-transformer';
import {
    IsInt,
    IsString,
    MaxLength,
    Min,
    MinLength,
    IsNotEmpty,
 } from 'class-validator';


export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  Id: string;

  @IsString()
  @IsNotEmpty()
    @MinLength(3)   
    @MaxLength(100)
  Name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  expertise: string;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  @Type(() => Number)
  noOfPublication: number;
}