import { Component, OnInit } from '@angular/core';
import { Connect4Service } from '../conecta4-service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board-component.html',
  styleUrls: ['./game-board-component.css']
})
export class GameBoardComponent implements OnInit {
  board: number[][] = [];

  constructor(public game: Connect4Service) {}

  ngOnInit() {
    this.board = this.game.getBoard();
  }

  makeMove(col: number) {
    this.game.makeMove(col);
  }
}