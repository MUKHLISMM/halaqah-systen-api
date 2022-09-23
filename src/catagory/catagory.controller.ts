import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';
import { CatagoryService } from './catagory.service';
import { CreateCatagoryDto } from './dto/create-catagory.dto';
import { UpdateCatagoryDto } from './dto/update-catagory.dto';

@Controller('catagory')
@ApiTags('category')
@ApiBearerAuth()
export class CatagoryController {
  constructor(private readonly catagoryService: CatagoryService) {}

  @Post()
  @Roles(Role.admin)
  create(@Body() createCatagoryDto: CreateCatagoryDto) {
    return this.catagoryService.create(createCatagoryDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.catagoryService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.catagoryService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.admin)
  update(@Param('id') id: string, @Body() updateCatagoryDto: UpdateCatagoryDto) {
    return this.catagoryService.update(+id, updateCatagoryDto);
  }

  @Delete(':id')
  @Roles(Role.admin)
  remove(@Param('id') id: string) {
    return this.catagoryService.remove(+id);
  }
}
