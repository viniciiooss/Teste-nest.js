import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('fact')
  getRandomCatFact(): string {
    return this.catsService.getRandomCatFact();
  }

  @Get('facts')
  getAllCatFacts(): string[] {
    return this.catsService.getAllCatFacts();
  }
}

