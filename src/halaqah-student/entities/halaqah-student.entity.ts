import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Halaqah } from "src/halaqah/entities/halaqah.entity";
import { Student } from "src/students/entities/student.entity";
@Table({
    paranoid:true
})
export class HalaqahStudent extends Model {
    @Column({
        primaryKey:true,
        unique:true
    })
    id:string

    @ForeignKey(()=>Halaqah)
    @Column
    halaqahId:string

    @ForeignKey(()=>Student)
    @Column
    studentId:number
    
}
