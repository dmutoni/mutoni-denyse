import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseModule } from 'src/utils/response/response.module';
import { ResponseService } from 'src/utils/response/response.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ResponseModule],
  controllers: [UsersController],
  providers: [UsersService, ResponseService]
})
export class UsersModule {}
