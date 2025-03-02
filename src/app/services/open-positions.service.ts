import { Injectable } from '@angular/core';
import { Position } from '../models/position';
import { Positions } from '../data/positions';

@Injectable({
  providedIn: 'root'
})
export class OpenPositionsService {
  private positions: Position[] = Positions;

  constructor() { }

  getPositions(): Position[] {
    return this.positions;
  }
}
