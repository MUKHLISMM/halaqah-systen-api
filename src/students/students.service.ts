import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
constructor(
  @InjectModel(Student)
  private studentModel: typeof Student,
) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentModel.create({...createStudentDto});
  }

  findAll() {
    return this.studentModel.findAll({
      paranoid:false
    });
  }

  findOne(id: number) {
    return this.studentModel.findByPk(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.update(updateStudentDto, {where:{id}});
  }

  remove(id: number) {
    return this.studentModel.destroy({where:{id}});
  }
}
