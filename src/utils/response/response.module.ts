import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';

@Module({
  providers: [ResponseService],
})
export class ResponseModule {}
