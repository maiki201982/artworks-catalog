import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoldPipe } from './pipes/search-bold.pipe';
import { ImageNotFoundDirective } from './directives/image-not-found.directive';

@NgModule({
  declarations: [
    SearchBoldPipe,
    ImageNotFoundDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    SearchBoldPipe,
    ImageNotFoundDirective
  ]
})
export class SharedModule { }
