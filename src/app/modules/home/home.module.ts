import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { HomeComponent } from './home/home.component';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkFilterComponent } from './artwork-filter/artwork-filter.component';
import { HomeRoutingModule } from './home-routing.module';
import { RandomTableComponent } from './random-table/random-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ArtworkCardComponent,
    ArtworkListComponent,
    ArtworkFilterComponent,
    RandomTableComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    DataViewModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule,
    RatingModule,
    TableModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
