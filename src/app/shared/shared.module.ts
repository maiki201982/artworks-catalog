import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
