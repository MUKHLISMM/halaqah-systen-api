
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Faculty } from "src/faculties/entities/faculty.entity";

@Table({
    paranoid: true
})
export class Major  extends Model{
    @Column({
        primaryKey: true,
        autoIncrement:true,
        unique:true
    })
   id: number

    @Column
    name: String

    @Column
    shortName: String

    @ForeignKey(() => Faculty)
    @Column
    facultyId: number
    @BelongsTo(()=> Faculty)
    faculty: Faculty

}
