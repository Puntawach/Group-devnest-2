import { Module } from '@nestjs/common';
import { ColumesService } from './columes.service';
import { ColumesController } from './columes.controller';

@Module({
  controllers: [ColumesController],
  providers: [ColumesService],
})
export class ColumesModule {}
