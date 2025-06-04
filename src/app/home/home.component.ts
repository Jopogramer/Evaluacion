import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {} // Inyección del servicio Router

  juegoInicio(): void {
    this.router.navigate(['/game-board']); // Ahora puedes usar this.router
  }

}
