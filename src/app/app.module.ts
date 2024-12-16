import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasengerdashboardComponent } from './shared/pasenger/pasengerdashboard/pasengerdashboard.component';
import { PasengercardComponent } from './shared/pasenger/pasengercard/pasengercard.component';
import { PasengerCountComponent } from './shared/pasenger/pasenger-count/pasenger-count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PasengerdashboardComponent,
    PasengercardComponent,
    PasengerCountComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
