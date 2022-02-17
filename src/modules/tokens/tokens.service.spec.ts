import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TokenDto } from '../users/dto/token.dto';
import { Token } from './entities/token.entity';
import { TokensService } from './tokens.service';

describe('TokensService', () => {
  let service: TokensService;
  let tokenRepository: Token;
  const requestElectricityDto = new TokenDto();
  requestElectricityDto.meter_number = 123467;
  requestElectricityDto.amount_of_money = 100;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TokensService,
        {
          provide: getRepositoryToken(Token),
          useValue: tokenRepository
        }
      ]
    }).compile();

    service = module.get<TokensService>(TokensService);
  });

  it('should generate a token with 8 numbers', async () => {
    expect(
      await service.generateElectricity(requestElectricityDto)
    ).toHaveLength(8);
  });
});
