import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from 'src/admins/entities/admin.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Major } from 'src/majors/entities/major.entity';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Table({
  paranoid: true,
})
export class Account extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column
  userName:string

  @Column({
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @Column
  password: string;

  @Column({
    comment:"1=Admin 2=facultyAdmin 3=Murabbee 4=Student"
  })
  roleId: number


  @ForeignKey(() => Student)
  @Column
  studentId: number;
  @BelongsTo(() => Student)
  student: Student;

  @ForeignKey(() => Teacher)
  @Column
  teacherId: number;
  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @ForeignKey(() => Admin)
  @Column
  adminId: number;
  @BelongsTo(() => Admin)
  admin: Admin;

  @ForeignKey(() => Faculty)
  @Column
  facultyId: number;
  @BelongsTo(() => Faculty)
  faculty: Faculty;

}
