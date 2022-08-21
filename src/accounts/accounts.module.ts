import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './entities/account.entity';
import { Admin } from 'src/admins/entities/admin.entity';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'constants/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports:[
    SequelizeModule.forFeature([
      Account,
      Admin,
      Student,
      Teacher
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AccountsController],
  providers: [AccountsService,JwtStrategy]
})
export class AccountsModule {}
