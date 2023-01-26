import { Test, TestingModule } from '@nestjs/testing';
import { AnalysService } from './analys.service';

describe('AnalysService', () => {
  let service: AnalysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalysService],
    }).compile();

    service = module.get<AnalysService>(AnalysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
