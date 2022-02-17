import { EAccountStatus } from '../enums/EAccountStatus';
import { CreateUserDto } from './../../modules/users/dto/create-user.dto';
import { User } from './../../modules/users/entities/user.entity';
export const toUserDto = (userData: User): CreateUserDto => {
  //distract elements from userData  and assign them to the new object
  const {
    id,
    firstName,
    lastName,
    email,
    phone_number,
    location,
    gender,
    national_id,
    marital_status,
    age,
    user_type,
    signature,
  } = userData;

  const userDto: CreateUserDto = {
    id,
    firstName,
    lastName,
    email,
    phone_number,
    location,
    gender,
    national_id,
    marital_status,
    age,
    user_type,
    signature,
  };
  return userDto;
};
