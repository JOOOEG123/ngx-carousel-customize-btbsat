import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomePageComponents } from './Pages/Homepage';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from './app-routing.module';

//fix - core-js with core@2

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    CommonModule,
  ],
  declarations: [AppComponent, ...HomePageComponents],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
