import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HalaqahService } from './halaqah.service';
import { CreateHalaqahDto } from './dto/create-halaqah.dto';
import { UpdateHalaqahDto } from './dto/update-halaqah.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';


@Controller('halaqah')
@ApiTags('halaqah')
export class HalaqahController {
  constructor(private readonly halaqahService: HalaqahService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(Role.teacher)
  create(@Body() createHalaqahDto: CreateHalaqahDto) {
    return this.halaqahService.create(createHalaqahDto);
  }

  @Get()
  @ApiQuery({
    name:"teacherId",
    required:false
  })
  @ApiQuery({
    name:"groupMemberId",
    required:false
  })
  findAll(@Query() query:any) {
    return this.halaqahService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.halaqahService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.teacher)
  update(@Param('id') id: string, @Body() updateHalaqahDto: UpdateHalaqahDto) {
    return this.halaqahService.update(+id, updateHalaqahDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(Role.teacher)
  remove(@Param('id') id: string) {
    return this.halaqahService.remove(+id);
  }
}
