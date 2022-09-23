import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    @InjectModel(Account) private accountModel: typeof Account,
  ) { }
  async create(createAdminDto: CreateAdminDto) {
    console.log(createAdminDto);
    
    let checkEmail = await this.accountModel.findOne({
      where: { email: createAdminDto.email },
    });
    // เช็คว่าบัญชีอีเมลนี้มีหรือไหม
    if (checkEmail)

      // ถ้ามีให้ตอบกลับ err 'อีเมลนี้ถูกใช้งานแล้ว'  // throw ส่ง err
      throw new HttpException('อีเมลนี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);

          //ค้นหารหัสนักศึกษาใน database = { id: createStudentDto.id }, ข้อมูลที่นักศึกษากรอกมา
          let checkTeacher = await this.adminModel.findOne({
            where: { id: createAdminDto.adminId },
          });

          if (checkTeacher)
            throw new HttpException('รหัสนี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);

          let insertData = await this.adminModel.sequelize.transaction(async (t) => {
            //ใส่ข้อมูลในตารางนักศึกษา
            let teacher = await this.adminModel.create({ ...createAdminDto,id:createAdminDto.adminId },{transaction:t});
            //ใส่ข้อมูลในตาราง บัญชี้ ผู้ใช่
            let account = await this.accountModel.create(
              {
              ...createAdminDto,
              roleId:createAdminDto.roleId||2,
              userName: createAdminDto.shortName,
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
    return this.adminModel.findAll({
      paranoid:false
    }
    );
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.update(updateAdminDto, {where:{id}});
  }

  remove(id: number) {
    return this.adminModel.destroy({where:{id}});
  }
}
