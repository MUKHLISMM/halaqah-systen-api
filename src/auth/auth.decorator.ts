import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';


export const ROLES_KEY = 'roles';
export const Roles = (roles: Role) => SetMetadata(ROLES_KEY, roles);

export const ISPUBLIC_KEY = 'PUBLIC';
export const Public = () => SetMetadata(ISPUBLIC_KEY, true);