import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Major } from 'src/majors/entities/major.entity';

@Table({
  paranoid: true,
})
export class Student extends Model {
  @Column({
    primaryKey: true,
        autoIncrement:true,
        unique:true
  })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  address: string;

  @Column
  birthDay: Date;

  @Column({
    type: DataType.STRING({ length: 10 }),
  })
  phoneNumber: string;

  @Column
  lineAccount: string;

  @Column
  facebookAccount: string;

  @ForeignKey(() => Faculty)
  @Column
  facultyId: number;
  @BelongsTo(() => Faculty)
  faculty: Faculty;

  @ForeignKey(() =>Major)
  @Column
  majorId: number;
  @BelongsTo(()=> Major)
  major : Major;
}
