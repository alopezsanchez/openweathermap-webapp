import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { CitiesModule } from './cities/cities.module';
import { AppComponent } from './app.component';
import { CityDetailModule } from './city-detail/city-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    CitiesModule,
    CityDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
