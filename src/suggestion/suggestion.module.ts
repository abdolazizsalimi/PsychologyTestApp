import { Module } from '@nestjs/common';
import { SuggestionController } from './suggestion.controller';
import { SuggestionService } from './suggestion.service';

@Module({
  controllers: [SuggestionController],
  providers: [SuggestionService]
})
export class SuggestionModule {}
