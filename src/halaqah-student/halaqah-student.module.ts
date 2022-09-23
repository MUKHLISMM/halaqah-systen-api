import { Module } from '@nestjs/common';
import { HalaqahStudentService } from './halaqah-student.service';
import { HalaqahStudentController } from './halaqah-student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Halaqah } from 'src/halaqah/entities/halaqah.entity';
import { Student } from 'src/students/entities/student.entity';
import { HalaqahStudent } from './entities/halaqah-student.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([Halaqah,Student,HalaqahStudent])
  ],
  controllers: [HalaqahStudentController],
  providers: [HalaqahStudentService]
})
export class HalaqahStudentModule {}
