import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiserviceService} from './apiservice.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

import { CountryspecialComponent } from './countryspecial/countryspecial.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    CountryspecialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
