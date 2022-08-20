import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Faculty } from './entities/faculty.entity';

@Module({
  imports: [SequelizeModule.forFeature([Faculty])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
