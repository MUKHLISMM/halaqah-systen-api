import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './entities/account.entity';
import { Admin } from 'src/admins/entities/admin.entity';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([
      Account,
      Admin,
      Student,
      Teacher
    ])
  ],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
