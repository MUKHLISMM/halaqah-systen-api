import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Faculty } from './entities/faculty.entity';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedFaculty } from './entities/faculty.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Faculty]),
    SeederModule.forFeature([SeedFaculty])
  ],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule { }
