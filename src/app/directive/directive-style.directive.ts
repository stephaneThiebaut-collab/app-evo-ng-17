import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveStyle]',
  standalone: true
})
export class DirectiveHomeLinkExplicatifHomePage implements AfterViewInit {
  @Input() color = 'white';
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.highlight(this.color, 'black');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#00b0ee', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white', 'black');
  }

  private highlight(color: string, textColor: string) {
    this.render.setStyle(this.el.nativeElement, 'background-color', color);
    this.render.setStyle(this.el.nativeElement, 'color', textColor);
  }

  constructor(private el: ElementRef, private render: Renderer2) { }
}
