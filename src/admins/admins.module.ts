import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { SeedAdmin } from './entities/admin.seeder';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { Account } from 'src/accounts/entities/account.entity';

@Module({
  imports: [
    SeederModule.forFeature([SeedAdmin]),
    SequelizeModule.forFeature([
      Admin,Account])
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule { }
