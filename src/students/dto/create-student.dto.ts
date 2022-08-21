import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  birthDay: Date;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  lineAccount: string;

  @ApiProperty()
  facebookAccount: string;

  @ApiProperty()
  facultyId: number;

  @ApiProperty()
  majorId: number;
}
