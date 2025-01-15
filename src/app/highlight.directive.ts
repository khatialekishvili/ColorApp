import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  readonly highlight = input<string>('');
  color: any;

  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.transform = 'scale(1.1)';
    this.el.nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = 'none';
  }
  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.color; 
  }
}
