import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appImageNotFound]'
})
export class ImageNotFoundDirective {
  @Input() notFoundUrl?: string;
  private elementRef: ElementRef = inject(ElementRef);

  @HostListener('error')
  loadNotFoundImage() {
    const img = this.elementRef.nativeElement;
    img.src = this.notFoundUrl;
  }

}
