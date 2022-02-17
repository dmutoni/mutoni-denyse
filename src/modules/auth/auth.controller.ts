import { Roles } from './../../decorators/roles.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public-decorator.decorator';
import { AuthLoginDto } from 'src/shared/dto/auth-login.dto';
import { AuthService } from './auth.service';
import { EUserType } from 'src/shared/enums/EUserType';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }

  @Roles(EUserType.ADMIN)
  @Get()
  async test() {
    return 'Success!';
  }
}
