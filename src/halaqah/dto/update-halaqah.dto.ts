import { PartialType } from '@nestjs/swagger';
import { CreateHalaqahDto } from './create-halaqah.dto';

export class UpdateHalaqahDto extends PartialType(CreateHalaqahDto) {}
