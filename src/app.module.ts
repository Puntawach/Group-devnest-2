import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [CommentsModule, LabelsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
