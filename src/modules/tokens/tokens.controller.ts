import { TokenDto } from './../users/dto/token.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public-decorator.decorator';

@Controller('tokens')
@ApiTags('Tokens')
@Public()
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  create(@Body() createTokenDto: TokenDto) {
    return this.tokensService.generateElectricity(createTokenDto);
  }
}
