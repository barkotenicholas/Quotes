import { Directive, ElementRef, Input,TemplateRef, ViewContainerRef } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appMostvotes]'
})
export class MostvotesDirective {


  constructor(private elm:ElementRef) {
    this.elm.nativeElement.style.fontStyle = 'italic';
   }

   ngOnInit(){

   }


}
