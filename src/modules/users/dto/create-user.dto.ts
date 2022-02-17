import { EAccountStatus } from './../../../shared/enums/EAccountStatus';
import { EMaritalStatus } from './../../../shared/enums/EMaritalStatus';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { EUserType } from 'src/shared/enums/EUserType';

export class CreateUserDto {
  id: string;

  @ApiProperty({
    required: true,
    example: 'John',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    required: true,
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
    example: '+254712345678',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    required: true,
    example: 'testing@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
    example: 'nyagatare',
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    required: true,
    example: 'female',
  })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    required: true,
    example: 'https://example.com',
  })
  @IsUrl()
  @IsNotEmpty()
  signature: string;

  @ApiProperty({
    required: true,
    example: 1234567890123456,
  })
  @IsNumber()
  @IsNotEmpty()
  national_id: number;

  @ApiProperty({
    required: true,
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password?: string;

  @ApiProperty({
    required: false,
    example: 'single',
  })
  @IsEnum(EMaritalStatus)
  @IsString()
  marital_status: EMaritalStatus;

  @ApiProperty({
    required: true,
    example: 12,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    required: false,
    example: 'admin',
  })
  @IsNotEmpty()
  user_type: EUserType;
}
