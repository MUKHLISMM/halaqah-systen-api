import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HalaqahStudentService } from './halaqah-student.service';
import { CreateHalaqahStudentDto } from './dto/create-halaqah-student.dto';
import { UpdateHalaqahStudentDto } from './dto/update-halaqah-student.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/auth.decorator';

@Controller('halaqah-student')
@ApiTags('halaqah-student')
@ApiBearerAuth()
export class HalaqahStudentController {
  constructor(private readonly halaqahStudentService: HalaqahStudentService) {}

  @Post()
  @Public()
  create(@Body() createHalaqahStudentDto: CreateHalaqahStudentDto) {
    return this.halaqahStudentService.create(createHalaqahStudentDto);
  }

  @Get()
  @Public()
  @ApiQuery({
    name:"studentId",
    required:false
  })
  findAll(@Query() query:any) {
    return this.halaqahStudentService.findAll(query);
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
