import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from 'constants/jwt';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from './role.enum';
import { ISPUBLIC_KEY, ROLES_KEY } from './auth.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
    // console.log('jwtAuthGuard');
  }
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<any>(ISPUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // console.log('====================================');
    // console.log(context);
    // console.log('====================================');
    if (isPublic) {
      console.log('public route');
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info, context, status) {
    // You can throw an exception based on either "info" or "err" arguments
    // console.log('====================================');
    // console.log({ err, user, info, context, status });
    // console.log('====================================');

    if (err) {
      throw new HttpException({ ...err }, HttpStatus.UNAUTHORIZED);
    } else if (info) {
      // throw info
      let message = info.message;
      if (info.name === 'TokenExpiredError') {
        message = 'คุณเข้าใช้งานเกินเวลาที่กำหนด!! กรุณาเข้าสู่ระบบอีกครั้ง';
      }
      if (info.message === 'No auth token') {
        message = 'กรุณาเข้าสู่ระบบ';
      }
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    }

    const isRoles = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!isRoles || typeof isRoles === 'undefined') {
      console.log('is student');
      return user;
    } else if ( user.roleId === Role.admin) {
      console.log('is Admin');
      return user;
    } else if (isRoles === Role.facultyAdmin && user.roleId === Role.facultyAdmin) {
      console.log('facultyAdmin');
      return user;
    } else if (isRoles === Role.teacher && user.roleId === Role.teacher )
    // else if (isRoles === Role.teacher && (user.roleId === Role.teacher || user.roleId === Role.teacherAdmin))
    {
      console.log('teacher');
      return user
    } else {
      throw new HttpException('คุณไม่มีสิทธิ', HttpStatus.FORBIDDEN);
    }
  }
}
