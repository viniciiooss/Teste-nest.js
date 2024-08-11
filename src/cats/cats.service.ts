import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly catFacts: string[] = [
    'Gatos podem fazer mais de 100 sons diferentes.',
    'Um grupo de gatos é chamado de "clowder".',
    'Gatos dormem cerca de 16 a 18 horas por dia.',
    'O cérebro de um gato é 90% semelhante ao de um humano.',
    'Gatos têm cinco dedos nas patas dianteiras, mas apenas quatro nas traseiras.'
  ];

  getRandomCatFact(): string {
    const randomIndex = Math.floor(Math.random() * this.catFacts.length);
    return this.catFacts[randomIndex];
  }

  getAllCatFacts(): string[] {
    return this.catFacts;
  }
}
