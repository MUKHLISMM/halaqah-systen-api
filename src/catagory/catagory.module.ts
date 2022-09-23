import { Module } from '@nestjs/common';
import { CatagoryService } from './catagory.service';
import { CatagoryController } from './catagory.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Halaqah } from 'src/halaqah/entities/halaqah.entity';
import { Category } from './entities/catagory.entity';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedCategory } from './entities/category.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Halaqah, Category]),
    SeederModule.forFeature([SeedCategory]),
  ],
  controllers: [CatagoryController],
  providers: [CatagoryService]
})
export class CatagoryModule { }
