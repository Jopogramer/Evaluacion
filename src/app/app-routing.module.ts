import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board-component/game-board-component';
import { CellComponent } from './cell-component/cell-component';
import { ScoreBoardComponent } from './score-board-component/score-board-component';

const routes: Routes = [
  { path: 'game-board-component', component: GameBoardComponent},
  { path: '', redirectTo: '/game-board-component', pathMatch: 'full'},
  { path: 'cell-compomnent', component: CellComponent},
  { path: 'score-board-component', component: ScoreBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
