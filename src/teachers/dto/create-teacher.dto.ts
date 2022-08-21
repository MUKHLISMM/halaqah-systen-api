import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class CreateTeacherDto {

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

}
