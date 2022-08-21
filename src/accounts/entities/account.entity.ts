import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from 'src/admins/entities/admin.entity';
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
  username:string

  @Column({
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @Column
  password: string;

  @Column({
    comment:"1=Admin 2=Teacher 3=Student"
  })
  roleid: number


  @ForeignKey(() => Student)
  @Column
  studentId: number;
  @BelongsTo(() => Student)
  student: Student;

  @ForeignKey(() => Teacher)
  @Column
  teacherId: number;
  @BelongsTo(() => Teacher)
  taecher: Teacher;

  @ForeignKey(() => Admin)
  @Column
  adminId: number;
  @BelongsTo(() => Admin)
  admin: Admin;
}
