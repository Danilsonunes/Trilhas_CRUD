import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { RegionComponent } from './components/region/region.component';
import { TrilhasComponent } from './components/trilhas/trilhas.component';
import { TrilhaComponent } from './components/trilha/trilha.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'create', component: CreateComponent },

  { path: 'region', component: RegionComponent },

  { path: 'trilhas', component: TrilhasComponent },

  { path: 'trilha/:id', component: TrilhaComponent },

  //{path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
