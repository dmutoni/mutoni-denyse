import { ResponseService } from './../../utils/response/response.service';
import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ResponseModule } from 'src/utils/response/response.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ResponseModule],
  controllers: [UsersController],
  providers: [UsersService, ResponseService],
})
export class UsersModule {}
