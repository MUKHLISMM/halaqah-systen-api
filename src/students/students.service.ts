import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student) private studentModel: typeof Student,
    @InjectModel(Account) private accountModel: typeof Account,

  ) { }

  async create(createStudentDto: CreateStudentDto) {
    //ค้นหาบัญชี ที่มีอีเมล = createStudentDto.email ข้อมูลที่นักศึกษากรอกมา
    let checkEmail = await this.accountModel.findOne({
      where: { email: createStudentDto.email },
    });
    // เช็คว่าบัญชีอีเมลนี้มีหรือไหม
    if (checkEmail)

      // ถ้ามีให้ตอบกลับ err 'อีเมลนี้ถูกใช้งานแล้ว'  // throw ส่ง err 
      throw new HttpException('อีเมลนี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);


    //ค้นหารหัสนักศึกษาใน database = { id: createStudentDto.id }, ข้อมูลที่นักศึกษากรอกมา
    let checkStudent = await this.studentModel.findOne({
      where: { id: createStudentDto.studentId },
    });

    if (checkStudent)
      throw new HttpException('รหัสนักศึกาานี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);

    let insertData = await this.studentModel.sequelize.transaction(async (t) => {
      //ใส่ข้อมูลในตารางนักศึกษา 
      let student = await this.studentModel.create({ ...createStudentDto ,id:createStudentDto.studentId},{transaction:t});
      //ใส่ข้อมูลในตาราง บัญชี้ ผู้ใช่
      let account = await this.accountModel.create(
        {
        ...createStudentDto,
        roleId: 4,
        userName: createStudentDto.firstName + ' ' + createStudentDto.lastName,
      },{
        transaction:t
      }
      );
      return {
        student, account
      }
    })
    return insertData

  }

  findAll() {
    return this.studentModel.findAll({
      paranoid: false
    });
  }

  findOne(id: number) {
    return this.studentModel.findByPk(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.update(updateStudentDto, { where: { id } });
  }

  remove(id: number) {
    return this.studentModel.destroy({ where: { id } });
  }
}
