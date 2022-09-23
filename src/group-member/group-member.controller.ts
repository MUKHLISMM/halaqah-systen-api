import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GroupMemberService } from './group-member.service';
import { AddMemberDto, CreateGroupMemberDto } from './dto/create-group-member.dto';
import { UpdateGroupMemberDto } from './dto/update-group-member.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('group-member')
export class GroupMemberController {
  constructor(private readonly groupMemberService: GroupMemberService) {}

  @Post()
  create(@Body() createGroupMemberDto: CreateGroupMemberDto) {
    return this.groupMemberService.create(createGroupMemberDto);
  }

  @Post('add-member')
  addMember(@Body() addMemberDto: AddMemberDto) {
    return this.groupMemberService.addMember(addMemberDto);
  }

  @Get()
  @ApiQuery({
    name:"teacherId",
    required:false
  })
  findAll(@Query() query:any) {
    return this.groupMemberService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupMemberDto: UpdateGroupMemberDto) {
    return this.groupMemberService.update(+id, updateGroupMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupMemberService.remove(+id);
  }
}
