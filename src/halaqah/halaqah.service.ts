import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHalaqahDto } from './dto/create-halaqah.dto';
import { UpdateHalaqahDto } from './dto/update-halaqah.dto';
import { Halaqah } from './entities/halaqah.entity';
import { v4 as uuidv4 } from 'uuid';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { GroupMember } from 'src/group-member/entities/group-member.entity';

@Injectable()
export class HalaqahService {
  constructor(
    @InjectModel(Halaqah) private halaqahModel: typeof Halaqah,
    @InjectModel(Student) private student: typeof Student,
    @InjectModel(Teacher) private teacher: typeof Teacher,
    @InjectModel(GroupMember) private groupMember: typeof GroupMember,

  ) {}

  create(createHalaqahDto: CreateHalaqahDto) {
    return this.halaqahModel.create({...createHalaqahDto})
  }

  findAll(query: any) {
    let where: any = {}

    if (query.teacherId) {
      where = {
        ...where,
        teacherId: query.teacherId
      }
    }
    if (query.groupMemberId) {
      where = {
        ...where,
        groupMemberId: query.groupMemberId
      }
    }
    return this.halaqahModel.findAll({
      include: [
        {
          model: this.student,
          as:"student"
        },
        {
          model: this.student,
          as:"member"
        },
        {
          model: this.teacher,
        },
        {
          model: this.groupMember,
        },
      ],
      where
    });
  }

  findOne(id: number) {
    return this.halaqahModel.findByPk(id);

  }

  update(id: number, updateHalaqahDto: UpdateHalaqahDto) {
    return this.halaqahModel.update(updateHalaqahDto,{where:{id}});
  }

  remove(id: number) {
    return this.halaqahModel.destroy({where:{id}});
  }
}
