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
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtAuthGuard } from './auth/jwt.guard';
import { CatagoryModule } from './catagory/catagory.module';
import { HalaqahModule } from './halaqah/halaqah.module';
import { HalaqahStudentModule } from './halaqah-student/halaqah-student.module';
import { GroupMemberModule } from './group-member/group-member.module';


@Module({
  imports: [
    AccountsModule,
    FacultiesModule,
    MajorsModule,
    SequelizeConnection,
    SeederforRoot,
    StudentsModule,
    TeachersModule,
    AdminsModule,
    AuthModule,
    CatagoryModule,
    HalaqahModule,
    HalaqahStudentModule,
    GroupMemberModule,
  ],
  // controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
],
})
export class AppModule { }
