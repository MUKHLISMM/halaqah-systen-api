import { ApiProperty } from "@nestjs/swagger"

export class CreateGroupMemberDto {
@ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    teacherId: number

}
export class AddMemberDto {

    @ApiProperty()
    groupMemberId: number

    @ApiProperty()
    studentId: number

}
