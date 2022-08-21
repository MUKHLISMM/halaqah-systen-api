import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // return true
    // const getHeader =
    // const request = context.switchToHttp().getRequest();
    // console.log(request);

    if (typeof requiredRoles === 'undefined') {
      // console.log('public route');
      return true;
    } else {
      const { user } = context.switchToHttp().getRequest();
      // const userData
      if (user) {
        return requiredRoles.some((role) => {
          console.log({ role, roleId: user.roleId });

          return user.roleId === role;
        });
      }else{
        return false
      }
    }

    // else{
    //     console.log('you mush to have permittions');
    //     throw new ForbiddenException('ต้องเข้าสู่ระบบและได้รับสิทธ์ในการเข้าถึงด้วย');
    // }
    return true;
    // console.log({roleGuard: requiredRoles});

    const { user } = context.switchToHttp().getRequest();
    // return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
