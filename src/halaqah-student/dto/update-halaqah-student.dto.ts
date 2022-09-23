import { PartialType } from '@nestjs/swagger';
import { CreateHalaqahStudentDto } from './create-halaqah-student.dto';

export class UpdateHalaqahStudentDto extends PartialType(CreateHalaqahStudentDto) {}
