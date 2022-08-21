import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  birthDay: Date;

  @ApiProperty()
  phoneNumber: number;

  @ApiProperty()
  lineAccount: string;

  @ApiProperty()
  facebookAccount: string;

  @ApiProperty()
  facultyId: number;

  @ApiProperty()
  majorId: number;
}
