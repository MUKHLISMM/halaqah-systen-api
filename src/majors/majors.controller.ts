import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('majors')
@ApiTags('majors')
@ApiBearerAuth()
export class MajorsController {
  constructor(private readonly majorsService: MajorsService) {}
  
  @Post()
  @Roles(Role.admin)
  create(@Body() createMajorDto: CreateMajorDto) {
    return this.majorsService.create(createMajorDto);
  }
  
  @Get()
  @Public()
  findAll() {
    return this.majorsService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.majorsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.admin)
  update(@Param('id') id: string, @Body() updateMajorDto: UpdateMajorDto) {
    return this.majorsService.update(+id, updateMajorDto);
  }
  

  @Delete(':id')
  @Roles(Role.admin)
  remove(@Param('id') id: string) {
    return this.majorsService.remove(+id);
  }
}
