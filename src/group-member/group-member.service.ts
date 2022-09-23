import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Halaqah } from 'src/halaqah/entities/halaqah.entity';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { AddMemberDto, CreateGroupMemberDto } from './dto/create-group-member.dto';
import { UpdateGroupMemberDto } from './dto/update-group-member.dto';
import { GroupMember } from './entities/group-member.entity';

@Injectable()
export class GroupMemberService {
  constructor(
    @InjectModel(GroupMember) private groupMemberModel: typeof GroupMember,
    @InjectModel(Teacher) private teacher: typeof Teacher,
    @InjectModel(Student) private student: typeof Student,
  ) { }

  create(createGroupMemberDto: CreateGroupMemberDto) {
    return this.groupMemberModel.create({ ...createGroupMemberDto })
  }
  addMember(addMemberDto: AddMemberDto) {
    return this.student.update({ groupMemberId: addMemberDto.groupMemberId }, {
      where: { id: addMemberDto.studentId }
    })
  }

  findAll(query: any) {
    let where: any = {}

    if (query.teacherId) {
      where = {
        ...where,
        teacherId: query.teacherId
      }
    }
    return this.groupMemberModel.findAll({
      include: [
        {
          model: this.student
        },
        {
          model: this.teacher
        }
      ],
      where
    });
  }

  findOne(id: number) {
    return this.groupMemberModel.findByPk(id);
  }

  update(id: number, updateGroupMemberDto: UpdateGroupMemberDto) {
    return this.groupMemberModel.update(updateGroupMemberDto, { where: { id } });
  }

  remove(id: number) {
    return this.groupMemberModel.destroy({ where: { id } });
  }
}
