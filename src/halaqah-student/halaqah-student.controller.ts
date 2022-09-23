import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HalaqahStudentService } from './halaqah-student.service';
import { CreateHalaqahStudentDto } from './dto/create-halaqah-student.dto';
import { UpdateHalaqahStudentDto } from './dto/update-halaqah-student.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('halaqah-student')
@ApiTags('halaqah-student')
@ApiBearerAuth()
export class HalaqahStudentController {
  constructor(private readonly halaqahStudentService: HalaqahStudentService) {}

  @Post()
  create(@Body() createHalaqahStudentDto: CreateHalaqahStudentDto) {
    return this.halaqahStudentService.create(createHalaqahStudentDto);
  }

  @Get()
  findAll() {
    return this.halaqahStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.halaqahStudentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHalaqahStudentDto: UpdateHalaqahStudentDto) {
    return this.halaqahStudentService.update(+id, updateHalaqahStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.halaqahStudentService.remove(+id);
  }
}
