import { ApiProperty } from "@nestjs/swagger"

export class CreateHalaqahStudentDto {
@ApiProperty()
id:number

    @ApiProperty()
    halaqahId:string

    @ApiProperty()
    studentId:number
}

