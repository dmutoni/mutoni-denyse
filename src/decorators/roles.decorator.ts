import { EUserType } from './../shared/enums/EUserType';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: EUserType[]) => SetMetadata(ROLES_KEY, roles);
