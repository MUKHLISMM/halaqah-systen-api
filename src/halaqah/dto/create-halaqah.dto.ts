import { ApiProperty } from "@nestjs/swagger";

export class CreateHalaqahDto {
    @ApiProperty()
    topic: string

    @ApiProperty()
    startDate: Date

    @ApiProperty()
    endDate: Date

    @ApiProperty()
    studentId: number

    @ApiProperty()
    info: string

    @ApiProperty()
    categoryId: number

    @ApiProperty()
    teacherId: number

    @ApiProperty()
    facultyId: number
    
    @ApiProperty()
    groupMemberId: number

    @ApiProperty()
    academicYear: String

    @ApiProperty()
    semester: number

}
