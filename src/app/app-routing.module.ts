import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { RuleComponent } from './rule/rule.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';


const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'main', component: MainComponent},
  {path: 'game', component: GameComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'rule', component: RuleComponent},
  {path: 'ranking-list', component: RankingListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
