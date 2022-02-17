import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenDto } from '../users/dto/token.dto';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { Token } from './entities/token.entity';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>
  ) {}

  async generateElectricity(userToken: TokenDto) {
    const { amount_of_money, meter_number } = userToken;
    const token = Math.floor(100000000 + Math.random() * 800000000)
      .toString()
      .substring(1);

    if (meter_number.toString().length !== 6) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Meter number must be 6 digits long'
        },
        HttpStatus.BAD_REQUEST
      );
    }
    if (amount_of_money < 100 || amount_of_money > 182500) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Amount of money must be between 100 and 182500'
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const validationDate = amount_of_money / 100;
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + validationDate);
    console.log(tomorrow);
    const tokenSave = await this.tokenRepository.create({
      token,
      expireDate: tomorrow
    });

    return await this.tokenRepository.save(tokenSave);
  }

  findOne(id: number) {
    return `This action returns a #${id} token`;
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
