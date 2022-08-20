import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './entities/teacher.entity';
import { Major } from 'src/majors/entities/major.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';

@Module({
  imports: [SequelizeModule.forFeature([Teacher, Major, Faculty])],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
