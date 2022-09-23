import { ApiProperty } from "@nestjs/swagger"

export class CreateHalaqahStudentDto {
    @ApiProperty()
    halaqahId:string

    @ApiProperty()
    studentId:number
}

