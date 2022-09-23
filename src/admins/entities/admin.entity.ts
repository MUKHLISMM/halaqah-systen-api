import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Faculty } from 'src/faculties/entities/faculty.entity';

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

  @Column
  shortName: string;

  @ForeignKey(() => Faculty)
  @Column
  facultyId: number;
  @BelongsTo(() => Faculty)
  faculty: Faculty;

}
