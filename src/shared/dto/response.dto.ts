import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class ResponseDto {
  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;

  @ApiProperty({
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  statusCode: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  data: any;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  path: any;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  method: string;
}
