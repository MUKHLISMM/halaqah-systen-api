import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Account } from 'src/accounts/entities/account.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher) private taecherModel: typeof Teacher,
    @InjectModel(Account) private accountModel: typeof Account,

  ) { }
  async create(createTeacherDto: CreateTeacherDto) {
    console.log(createTeacherDto);
    
    let checkEmail = await this.accountModel.findOne({
      where: { email: createTeacherDto.email },
    });
    // เช็คว่าบัญชีอีเมลนี้มีหรือไหม
    if (checkEmail)

      // ถ้ามีให้ตอบกลับ err 'อีเมลนี้ถูกใช้งานแล้ว'  // throw ส่ง err
      throw new HttpException('อีเมลนี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);

          //ค้นหารหัสนักศึกษาใน database = { id: createStudentDto.id }, ข้อมูลที่นักศึกษากรอกมา
          let checkTeacher = await this.taecherModel.findOne({
            where: { id: createTeacherDto.teacherId },
          });

          if (checkTeacher)
            throw new HttpException('รหัสนักศึกาานี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);

          let insertData = await this.taecherModel.sequelize.transaction(async (t) => {
            //ใส่ข้อมูลในตารางนักศึกษา
            let teacher = await this.taecherModel.create({ ...createTeacherDto,id:createTeacherDto.teacherId },{transaction:t});
            //ใส่ข้อมูลในตาราง บัญชี้ ผู้ใช่
            let account = await this.accountModel.create(
              {
              ...createTeacherDto,
              roleId:createTeacherDto.roleId||3,
              userName: createTeacherDto.firstName + ' ' + createTeacherDto.lastName,
              // teacherId: createTeacherDto.teacherId,
            },{
              transaction:t
            }
            );
            return {
              teacher, account
            }
          })
          return insertData
}
  findAll() {
    return this.taecherModel.findAll({
      paranoid:false
    });
  }

  findOne(id: number) {
    return this.taecherModel.findByPk(id);
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.taecherModel.update(updateTeacherDto, {where:{id}});
  }

  remove(id: number) {
    return this.taecherModel.destroy({where:{id}});
  }
}
