import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class TokenDto {
  id: string;

  @ApiProperty({
    required: true,
    example: 12
  })
  @IsNumber()
  meter_number: number;

  @ApiProperty({
    required: true,
    example: 12
  })
  @IsNumber()
  amount_of_money: number;
}
