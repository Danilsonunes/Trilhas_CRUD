import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrilhasComponent } from './components/trilhas/trilhas.component';
import { TrilhaComponent } from './components/trilha/trilha.component';
import { RegionComponent } from './components/region/region.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/atualizar/update.component';
import { TrilhaService } from './trilha.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrilhasComponent,
    TrilhaComponent,
    RegionComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TrilhaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
