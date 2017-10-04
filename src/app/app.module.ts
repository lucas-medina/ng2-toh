import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ChampionDetailComponent } from '../components/champion-detail/champion-detail.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule
  ],

  declarations: [ 
  	AppComponent,
    ChampionDetailComponent 
  ],

  bootstrap: [ 
  	AppComponent
  ]
  
})

export class AppModule { }
