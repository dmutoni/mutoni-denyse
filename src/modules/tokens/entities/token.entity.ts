import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Token {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Denyse' })
  @Column({
    type: 'bigint',
    nullable: false
  })
  token: number;
}
