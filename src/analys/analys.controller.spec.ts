import { Test, TestingModule } from '@nestjs/testing';
import { AnalysController } from './analys.controller';

describe('AnalysController', () => {
  let controller: AnalysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalysController],
    }).compile();

    controller = module.get<AnalysController>(AnalysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
