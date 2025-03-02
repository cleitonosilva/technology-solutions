import { Injectable } from '@angular/core';
import { Position } from '../models/position';


@Injectable({
  providedIn: 'root'
})
export class OpenPositionsService {
  private positions: Position[] = [
    {
      id: 1,
      title: 'Desenvolvedor Frontend Angular',
      location: 'Remoto',
      level: 'Pleno',
      description: 'Responsável por criar interfaces e componentes em Angular...'
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      location: 'Híbrido - São Paulo',
      level: 'Sênior',
      description: 'Implementar pipelines de CI/CD, gerenciar infra na nuvem...'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      location: 'Remoto',
      level: 'Júnior',
      description: 'Criação de wireframes, protótipos e fluxos de usuário...'
    }
  ];

  constructor() {}

  getPositions(): Position[] {
    return this.positions;
  }
}
