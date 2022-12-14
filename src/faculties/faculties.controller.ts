import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('faculties')
@ApiTags('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}
  
  @Post()
  @ApiBearerAuth()
  @Roles(Role.admin)
  create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.create(createFacultyDto);
  }
  
  @Get()
  @Public()
  findAll() {
    return this.facultiesService.findAll();
  }
  
  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.facultiesService.findOne(+id);
  }
  
  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.admin)
  update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
    return this.facultiesService.update(+id, updateFacultyDto);
  }
  
  @Delete(':id')
  @ApiBearerAuth()
  @Roles(Role.admin)
  remove(@Param('id') id: string) {
    return this.facultiesService.remove(+id);
  }
}
