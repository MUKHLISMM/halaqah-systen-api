import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher)
    private teacherModel: typeof Teacher,
  ){}
  create(createTeacherDto: CreateTeacherDto) {
    return this.teacherModel.create({...createTeacherDto});
  }

  findAll() {
    return this.teacherModel.findAll({
      paranoid:false
    });
  }

  findOne(id: number) {
    return this.teacherModel.findByPk(id);
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherModel.update(updateTeacherDto, {where:{id}});
  }

  remove(id: number) {
    return this.teacherModel.destroy({where:{id}});
  }
}
