import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Max, MaxLength } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  roleId: number

  @ApiProperty()
  @MaxLength(11)
  studentId: number;

  @ApiProperty()
  @MaxLength(11)
  teacherId: number;

  @ApiProperty()
  @MaxLength(11)
  adminId: number;
}

export class LogInDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

}
