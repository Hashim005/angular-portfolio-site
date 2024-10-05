import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIncreaseFontSize]'
})
export class IncreaseFontSizeDirective {
  private originalFontSize = '';
  private originalFontStyle = '';
  // private isFontIncreased: boolean = false;

  constructor(private el:ElementRef, private renderer:Renderer2) { }
  // @HostListener('click') onClick(){
  //   if(!this.isFontIncreased){
  //     this.originalFontSize = this.el.nativeElement.style.fontSize || window.getComputedStyle(this.el.nativeElement).fontSize;
  //     this.changeFontSize('40px')
  //     this.isFontIncreased = true;
  //   }
  //   else{
  //     this.changeFontSize(this.originalFontSize);
  //     this.isFontIncreased = false;
  //   }

  // }

  @HostListener('mouseenter') onMouseEnter(){
    this.originalFontSize = this.el.nativeElement.style.fontSize || window.getComputedStyle(this.el.nativeElement).fontSize;
    this.originalFontSize = this.el.nativeElement.style.fontFamily || window.getComputedStyle(this.el.nativeElement).fontFamily;
    this.changeFont('20px', 'Georgia, serif','bold', 'red');

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeFont(this.originalFontSize, this.originalFontStyle,'normal', 'black');

  }

  private changeFont(size:string, font:string, weight:string, color:string){
    this.renderer.setStyle(this.el.nativeElement, 'font-size', size);
    this.renderer.setStyle(this.el.nativeElement, 'font-family', weight);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', weight);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);

  }
  // private changeFontSize(size: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'font-size', size);
  // }

}
