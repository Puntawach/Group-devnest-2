import { Test, TestingModule } from '@nestjs/testing';
import { ColumesController } from './columes.controller';
import { ColumesService } from './columes.service';

describe('ColumesController', () => {
  let controller: ColumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumesController],
      providers: [ColumesService],
    }).compile();

    controller = module.get<ColumesController>(ColumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
