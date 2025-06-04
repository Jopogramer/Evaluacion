import { Component } from '@angular/core';
import { Connect4Service } from '../conecta4-service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './score-board-component.html',
  styleUrls: ['./score-board-component.css']
})
export class ScoreBoardComponent {
  constructor(public game: Connect4Service) {}

  get currentPlayer() {
    return this.game.getCurrentPlayer();
  }

  get winner() {
    return this.game.getWinner();
  }

  reset() {
    this.game.resetGame();
  }
}
