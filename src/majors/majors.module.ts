import { Module } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { MajorsController } from './majors.controller';
import { Major } from './entities/major.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Major])],
  controllers: [MajorsController],
  providers: [MajorsService]
})
export class MajorsModule {}
