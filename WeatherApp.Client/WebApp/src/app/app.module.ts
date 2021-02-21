import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherCardListComponent } from './weather-card-list/weather-card-list.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorAlertComponent } from './alert/alert.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardListComponent,
    WeatherCardComponent,
    LoaderComponent,
    ErrorAlertComponent,
    LocationSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
