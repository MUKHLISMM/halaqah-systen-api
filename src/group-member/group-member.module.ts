import { Module } from '@nestjs/common';
import { GroupMemberService } from './group-member.service';
import { GroupMemberController } from './group-member.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { GroupMember } from './entities/group-member.entity';
import { Halaqah } from 'src/halaqah/entities/halaqah.entity';
import { Student } from 'src/students/entities/student.entity';

@Module({
  imports:[
    SequelizeModule.forFeature(
      [
        Teacher,
        Halaqah,
        GroupMember,
        Student
      ])
  ],
  controllers: [GroupMemberController],
  providers: [GroupMemberService]
})
export class GroupMemberModule {}
