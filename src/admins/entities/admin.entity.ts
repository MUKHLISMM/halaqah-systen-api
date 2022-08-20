import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Major } from 'src/majors/entities/major.entity';

@Table({
  paranoid: true,
})
export class Admin extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      })
      id: number;

  @Column
  name: string;

  @ForeignKey(() => Faculty)
  @Column
  facultyId: number;
  @BelongsTo(() => Faculty)
  faculty: Faculty;

  @ForeignKey(() => Major)
  @Column
  majorId: number;
  @BelongsTo(() => Major)
  major: Major;
}
