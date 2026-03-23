import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { ChecklistsModule } from './checklists/checklists.module';
import { LabelsModule } from './labels/labels.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ColumesModule } from './columes/columes.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    CommentsModule,
    ChecklistsModule,
    LabelsModule,
    WorkspacesModule,
    ColumesModule,
    BoardsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
