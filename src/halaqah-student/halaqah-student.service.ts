import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Halaqah } from 'src/halaqah/entities/halaqah.entity';
import { Student } from 'src/students/entities/student.entity';
import { CreateHalaqahStudentDto } from './dto/create-halaqah-student.dto';
import { UpdateHalaqahStudentDto } from './dto/update-halaqah-student.dto';
import { HalaqahStudent } from './entities/halaqah-student.entity';
import { HttpException, HttpStatus } from '@nestjs/common'

@Injectable()
export class HalaqahStudentService {
  constructor(
    @InjectModel(HalaqahStudent) private halaqahStudentModel: typeof HalaqahStudent,
    @InjectModel(Halaqah) private halaqahModel: typeof Halaqah,
    @InjectModel(Student) private student: typeof Student,

  ) { }
  async create(createHalaqahStudentDto: CreateHalaqahStudentDto) {
    let getActivity = await this.halaqahModel.findByPk(createHalaqahStudentDto.halaqahId)
    if (!getActivity) {
      throw new HttpException("Can not find Halaqah", HttpStatus.BAD_REQUEST)
    }

    let getStudent = await this.student.findByPk(createHalaqahStudentDto.studentId)
    if (!getStudent) {
      throw new HttpException("can not find Student", HttpStatus.BAD_REQUEST)
    }

    if (getActivity.groupMemberId !== getStudent.groupMemberId) {
      throw new HttpException("File is not Math", HttpStatus.BAD_REQUEST)
    }

    return this.halaqahStudentModel.create({ ...createHalaqahStudentDto })
  }

  findAll() {
    return this.halaqahStudentModel.findAll();
  }

  findOne(id: number) {
    return this.halaqahStudentModel.findByPk(id);
  }

  update(id: number, updateHalaqahStudentDto: UpdateHalaqahStudentDto) {
    return this.halaqahStudentModel.update(updateHalaqahStudentDto, { where: { id } });
  }

  remove(id: number) {
    return this.halaqahStudentModel.destroy({ where: { id } });
  }
}
