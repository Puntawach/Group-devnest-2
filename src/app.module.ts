import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { ChecklistsModule } from './checklists/checklists.module';
import { LabelsModule } from './labels/labels.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

@Module({
  imports: [CommentsModule, ChecklistsModule, LabelsModule, WorkspacesModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
