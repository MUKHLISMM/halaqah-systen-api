import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length, Max, MaxLength } from 'class-validator';
import { LogInDto } from 'src/accounts/dto/create-account.dto';

export class CreateStudentDto extends PartialType(LogInDto) {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(11)
  studentId: number;

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

  @ApiProperty()
  groupMemberId: number

}
