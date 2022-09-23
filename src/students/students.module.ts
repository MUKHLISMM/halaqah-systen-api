import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './entities/student.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Major } from 'src/majors/entities/major.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { HalaqahStudent } from 'src/halaqah-student/entities/halaqah-student.entity';

@Module({
  imports: [SequelizeModule.forFeature([Student, Faculty, Major, Account,HalaqahStudent])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
