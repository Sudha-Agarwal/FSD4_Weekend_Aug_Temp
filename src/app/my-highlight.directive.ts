import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(private elRef: ElementRef, private rendrer:Renderer2) {

    this.rendrer.setStyle(this.elRef.nativeElement, 'background-color','red');
    this.rendrer.setStyle(this.elRef.nativeElement, 'color','blue');
    //this.elRef.nativeElement.style.background = 'red';
   }

}
