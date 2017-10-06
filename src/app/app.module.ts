import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ChampionsComponent }  from './components/champions/champions.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ChampionService } from './services/champions.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    AppRoutingModule
  ],

  declarations: [ 
  	AppComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    DashboardComponent 
  ],

  bootstrap: [ 
  	AppComponent
  ],

  providers: [
    ChampionService
  ]
  
})

export class AppModule { }
