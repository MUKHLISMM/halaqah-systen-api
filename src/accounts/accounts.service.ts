import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Admin } from 'src/admins/entities/admin.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Major } from 'src/majors/entities/major.entity';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { CreateAccountDto, LogInDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account) private accountModel: typeof Account,
    @InjectModel(Teacher) private teacher: typeof Teacher,
    @InjectModel(Student) private student: typeof Student,
    @InjectModel(Admin) private admin: typeof Admin,
    @InjectModel(Faculty) private faculty: typeof Faculty,
    @InjectModel(Major) private major: typeof Major,
    private jwtService: JwtService,
  ) { }
  async create(createAccountDto: CreateAccountDto) {
    let account = await this.accountModel.findOne({
      where: { email: createAccountDto.email },
    });
    if (account)
      throw new HttpException('อีเมลนี้ถูกใช้งานแล้ว', HttpStatus.BAD_REQUEST);
    return this.accountModel.create({ ...createAccountDto });
  }

  findAll(query: any) {
    let where: any = {}
    if (query.roleId) {
      where = {
        ...where,
        roleId: {
          [sequelize.Op.in]: query.roleId.split(",")
        }
      }
    }
    if (query.facultyId) {
      where = {
        ...where,
        facultyId: query.facultyId
      }
    }
    return this.accountModel.findAll({
      include: [
        {
          model: this.admin,
        },
        {
          model: this.student,
        },
        {
          model: this.teacher,
        },
      ],
      where
    });
  }

  findOne(id: number) {
    return this.accountModel.findByPk(id, {
      include: [
        {
          model: this.admin,
        },
        {
          model: this.student,
        },
        {
          model: this.teacher,
        },
      ],
    });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    let acc = await this.accountModel.findByPk(id)

    return await this.accountModel.sequelize.transaction(async (t) => {
      if (acc.roleId !== 4) {
        await this.teacher.update({ ...updateAccountDto, id: updateAccountDto.teacherId }, { where: { id: acc.teacherId } })
      } else {
        await this.student.update({ ...updateAccountDto, id: updateAccountDto.studentId }, { where: { id: acc.studentId } })
      }
      await this.accountModel.update(updateAccountDto, { where: { id }, transaction: t });
    })
  }

  remove(id: number) {
    return this.accountModel.destroy({ where: { id } });
  }

  async Login(logInDto: LogInDto) {
    let account = await this.accountModel.findOne({
      include: [
        {
          model: this.admin,
          include: [
            {
              model: this.faculty,
            },
            
          ]
        },
        {
          model: this.student,
          include: [
            {
              model: this.faculty,
            },
            {
              model: this.major,
            },
          ],
        },

        {
          model: this.teacher,
          include: [
            {
              model: this.faculty,
            },
            {
              model: this.major,
            },
          ],
        },
      ],
      where: { ...logInDto },
      // raw: true
    });
    if (!account)
      throw new HttpException(
        'อีเมลหรือรหัสไม่ถูกต้อง',
        HttpStatus.UNAUTHORIZED,
      );
    console.log(account);
    let profile = account.admin
      ? account?.admin
      : account?.teacher
        ? account?.teacher
        : account?.student;
    const payload = {
      username: account.userName,
      roleId: account.roleId,

      sub: account.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
      profile: {
        ...profile?.get({
          plain: false,
        }),
        roleId: account.roleId,
        userName: account.userName,
        email: account.email,
        accountId: account.id,
        facultyId: account.facultyId,
        
      },
    };
  }
}
