import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { FacultiesModule } from './faculties/faculties.module';
import { MajorsModule } from './majors/majors.module';
import { SeederforRoot, SequelizeConnection } from 'config/db';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    AccountsModule,
    FacultiesModule,
    MajorsModule,
    SequelizeConnection,
    SeederforRoot,
    StudentsModule,
    TeachersModule,
    AdminsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
