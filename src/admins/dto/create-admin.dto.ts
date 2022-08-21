import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto { 
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    facultyId: number;
  
    @ApiProperty()
    majorId: number;
}
