import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, Length, MaxLength } from "class-validator";
import { LogInDto } from "src/accounts/dto/create-account.dto";

export class CreateTeacherDto extends PartialType(LogInDto) {
      @ApiProperty()
      @IsNotEmpty()
      @MaxLength(11)
      teacherId: number;

      @ApiProperty()
      firstName: string;
    
      @ApiProperty()
      lastName: string;
    
      @ApiProperty()
      address: string;
    
      @ApiProperty()
      birthDay: Date;
    
      @ApiProperty()
      @Length(10,10)
      phoneNumber: string;
    
      @ApiProperty()
      lineAccount: string;
    
      @ApiProperty()
      facebookAccount: string;
    
      @ApiProperty()
      position: string;
    
      @ApiProperty()
      isAdmin: Boolean;
    
  
      @ApiProperty()
      facultyId: number;
 

      @ApiProperty()
      majorId: number;

      @ApiProperty()
      roleId: number;

}
