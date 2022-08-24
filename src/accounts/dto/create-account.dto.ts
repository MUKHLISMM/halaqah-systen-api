import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

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
  studentId: number;

  @ApiProperty()
  teacherId: number;

  @ApiProperty()
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
