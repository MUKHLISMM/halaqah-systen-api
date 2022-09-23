import { Module } from '@nestjs/common';
import { HalaqahService } from './halaqah.service';
import { HalaqahController } from './halaqah.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Halaqah } from './entities/halaqah.entity';
import { Category } from 'src/catagory/entities/catagory.entity';
import { HalaqahStudent } from 'src/halaqah-student/entities/halaqah-student.entity';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { GroupMember } from 'src/group-member/entities/group-member.entity';

@Module({
  imports: [
    SequelizeModule.forFeature(
      [
        Halaqah,
        Category,
        HalaqahStudent,
        Student,
        Teacher,
        GroupMember
      ])
  ],
  controllers: [HalaqahController],
  providers: [HalaqahService]
})
export class HalaqahModule { }
