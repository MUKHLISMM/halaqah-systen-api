import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Major } from 'src/majors/entities/major.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([
      Admin,
      Faculty,
      Major
    ])
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
