// game-board.component.ts
import { Component, OnInit } from '@angular/core';
import { Connect4Service } from '../conecta4-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board-component.html',
  styleUrls: ['./game-board-component.css']
})
export class GameBoardComponent implements OnInit {
  board: number[][] = [];
  ganador: string | null = null;
  turno: string = 'jugador1'; // Inicializa el turno del jugador
  jugador1: string = '';
  jugador2: string = '';

  constructor(public game: Connect4Service, private router: Router) {}

  ngOnInit() {
    this.board = this.game.getBoard();
  }

  makeMove(col: number) {
    this.game.makeMove(col);
    this.ganador = this.game.getWinner().toString();
    this.turno = this.game.getTurn();
  }

  guardarDatos(): void {
    localStorage.setItem('jugador1', this.jugador1);
    localStorage.setItem('jugador2', this.jugador2);
    alert('Datos guardados correctamente');
  }

  determinarGanador(ganador: string): void {
    const jugador1 = localStorage.getItem('jugador1');
    const jugador2 = localStorage.getItem('jugador2');

    if (ganador === 'jugador1') {
      alert(`¡${jugador1} ha ganado!`);
    } else if (ganador === 'jugador2') {
      alert(`¡${jugador2} ha ganado!`);
    } else {
      alert('¡Es un empate!');
    }
  }

  reiniciarJuego() {
    this.game.resetGame();
    this.board = this.game.getBoard();
    this.ganador = null;
    this.turno = 'jugador1';
  }

}