import { Module } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { MajorsController } from './majors.controller';
import { Major } from './entities/major.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { SeedMajor } from './entities/major.seeder';
import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Major, Faculty]),
    SeederModule.forFeature([SeedMajor])
  ],
  controllers: [MajorsController],
  providers: [MajorsService],
})
export class MajorsModule { }
