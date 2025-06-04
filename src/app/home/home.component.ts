import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  player1: string = '';
  player2: string = '';

  constructor(private router: Router) {}

  startGame() {
    // Podrías guardar nombres en localStorage o en un servicio
    this.router.navigate(['/game']);
  }
}
