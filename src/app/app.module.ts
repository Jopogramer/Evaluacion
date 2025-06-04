import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from '../app/game-board-component/game-board-component';
import { CellComponent } from '../app/cell-component/cell-component';
import { ScoreBoardComponent } from '../app/score-board-component/score-board-component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CellComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
