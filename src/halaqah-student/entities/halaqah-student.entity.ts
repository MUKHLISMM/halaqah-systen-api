import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { GroupMember } from "src/group-member/entities/group-member.entity";
import { Halaqah } from "src/halaqah/entities/halaqah.entity";
import { Student } from "src/students/entities/student.entity";
@Table({
    paranoid:true
})
export class HalaqahStudent extends Model {
    @Column({
        primaryKey: true,
        autoIncrement:true,
        unique:true
    })
    id:number

    @ForeignKey(()=>Halaqah)
    @Column
    halaqahId:string



    @ForeignKey(()=>Student)
    @Column
    studentId:number
    @BelongsTo(()=>Student)
    student:Student






  
    
}
