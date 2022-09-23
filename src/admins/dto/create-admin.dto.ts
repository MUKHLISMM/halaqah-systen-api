import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { LogInDto } from "src/accounts/dto/create-account.dto";

export class CreateAdminDto extends PartialType(LogInDto){
    @ApiProperty()
    @IsNotEmpty()
    adminId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    shortName: string;

    @ApiProperty()
    facultyId: number;

    @ApiProperty()
    roleId: number;

}
