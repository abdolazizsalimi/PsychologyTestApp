import { Module } from '@nestjs/common';
import { AnalysController } from './analys.controller';
import { AnalysService } from './analys.service';

@Module({
  controllers: [AnalysController],
  providers: [AnalysService]
})
export class AnalysModule {}
