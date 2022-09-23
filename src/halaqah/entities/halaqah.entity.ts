import sequelize from "sequelize"
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Category } from "src/catagory/entities/catagory.entity"
import { Faculty } from "src/faculties/entities/faculty.entity"
import { GroupMember } from "src/group-member/entities/group-member.entity"
import { HalaqahStudent } from "src/halaqah-student/entities/halaqah-student.entity"
import { Student } from "src/students/entities/student.entity"
import { Teacher } from "src/teachers/entities/teacher.entity"

@Table({paranoid:true})
export class Halaqah extends Model {
    @Column({
        primaryKey: true,
        unique: true,
        defaultValue: sequelize.UUIDV4,
    })
    id: string

    @Column
    topic: string

    @Column
    startDate: Date

    @Column
    endDate: Date

    @ForeignKey(() => Student)
    @Column
    studentId: number
    @BelongsTo(() => Student)
    student: Student

    @Column(
        {
            type:DataType.TEXT
        }
    )
    info: string

    @ForeignKey(() => Category)
    @Column
    categoryId: number

    @BelongsTo(() => Category)
    category: Category

    @ForeignKey(() => Teacher)
    @Column
    teacherId: number;
    @BelongsTo(() => Teacher)
    teacher: Teacher;

    @ForeignKey(() => Faculty)
    @Column
    facultyId: number;
    @BelongsTo(() => Faculty)
    faculty: Faculty;

    @ForeignKey(() =>GroupMember)
    @Column
    groupMemberId: number;
    @BelongsTo(()=> GroupMember)
    groupMember : GroupMember;
  
    @Column
    academicYear: string

    @Column
    semester: number

    @BelongsToMany(()=>Student,()=>HalaqahStudent)
    member:Student[]
}
