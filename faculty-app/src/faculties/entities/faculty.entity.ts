import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity('faculties') 
export class Faculty {
  @PrimaryColumn({
     length: 10,
    type: 'varchar',
  }
  )
  Id: string; 

  @Column({
     length: 100,
    type: 'varchar',
    name:'faculty_name',
  })
  Name: string;

  @Column({
    type: 'int',
    name:'facultyExpertise',
    default: 0,
  })
  expertise: string;

  @Column({
    type: 'int',
    name:'facultyPublication',
    default: 0,
  })
  noOfPublication: number;

  @UpdateDateColumn()
    updateFaculty: Date;

    @CreateDateColumn()
    createFaculty: Date;

    @DeleteDateColumn()
    deleteFaculty: Date;
}