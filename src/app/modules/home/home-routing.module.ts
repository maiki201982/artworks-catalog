import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found/not-found.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { HomeComponent } from './home/home.component';
import { RandomTableComponent } from './random-table/random-table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ArtworkListComponent
      },
      {
        path: 'random-table',
        component: RandomTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
