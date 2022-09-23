import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Student } from "src/students/entities/student.entity"
import { Teacher } from "src/teachers/entities/teacher.entity"

@Table({paranoid:true})
export class GroupMember extends Model {
    @Column({
        primaryKey: true,
        unique: true,
        autoIncrement:true
    })
    id: number

    @Column
    name: string

    @ForeignKey(()=>Teacher)
    @Column
    teacherId: number
    @BelongsTo(()=>Teacher)
    teacher: Teacher

    @HasMany(()=>Student)
    students:Student
}
