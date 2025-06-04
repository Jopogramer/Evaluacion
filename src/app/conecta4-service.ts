// connect4.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Connect4Service {
  readonly ROWS = 6;
  readonly COLS = 7;
  board: number[][] = [];
  currentPlayer: number = 1;
  winner: number = 0;

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.board = Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(0));
    this.currentPlayer = 1;
    this.winner = 0;
  }

  getBoard() {
    return this.board;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  makeMove(col: number): boolean {
    if (this.winner) return false;
    for (let row = this.ROWS - 1; row >= 0; row--) {
      if (this.board[row][col] === 0) {
        this.board[row][col] = this.currentPlayer;
        if (this.checkWin(row, col)) this.winner = this.currentPlayer;
        else this.currentPlayer = 3 - this.currentPlayer; // alterna entre 1 y 2
        return true;
      }
    }
    return false;
  }

  checkWin(row: number, col: number): boolean {
    const player = this.board[row][col];
    const directions = [[0,1], [1,0], [1,1], [1,-1]];
    for (const [dx, dy] of directions) {
      let count = 1;
      for (let d = 1; d < 4; d++) {
        const r = row + dx*d, c = col + dy*d;
        if (this.board[r]?.[c] === player) count++; else break;
      }
      for (let d = 1; d < 4; d++) {
        const r = row - dx*d, c = col - dy*d;
        if (this.board[r]?.[c] === player) count++; else break;
      }
      if (count >= 4) return true;
    }
    return false;
  }

  getWinner() {
    return this.winner;
  }
}