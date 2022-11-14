import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './register/register.component';
import { RuleComponent } from './rule/rule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
// import { OfflineComponent } from './offline/offline.component';
import { GuestsComponent } from './guests/guests.component';
// import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { RankingListComponent } from './ranking-list/ranking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MainComponent,
    GameComponent,
    RegisterComponent,
    GuestsComponent,
    RuleComponent,
    RankingListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'rule', component: RuleComponent},
      {path: 'register', component: RegisterComponent},
      // {path: '', redirectTo: '/start', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
