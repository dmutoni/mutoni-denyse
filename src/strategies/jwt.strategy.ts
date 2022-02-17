import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EAccountStatus } from 'src/shared/enums/EAccountStatus';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: {
    userId: string;
    email: string;
    role: string;
    status: EAccountStatus;
  }) {
    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
      status: payload.status,
    };
  }
}
