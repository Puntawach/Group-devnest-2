import { Test, TestingModule } from '@nestjs/testing';
import { ColumesService } from './columes.service';

describe('ColumesService', () => {
  let service: ColumesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColumesService],
    }).compile();

    service = module.get<ColumesService>(ColumesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
