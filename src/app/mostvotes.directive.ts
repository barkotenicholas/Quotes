import { Directive, ElementRef, Input,TemplateRef, ViewContainerRef } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appMostvotes]'
})
export class MostvotesDirective {

  @Input() set showMostLiked(quotes:Quote[]){
    let largets: Quote;
    let z =0
    let i = 0 ;
    for(i;i<quotes.length;i++){
      if(quotes[i].upvote>z){
        largets = quotes[i];
        z = quotes[i].upvote;
      }
    }
    if(z>1){
      this.elm.nativeElement.style.textDecoration="line-through";
    }
  }

  constructor(private elm:ElementRef) {
   }

   ngOnInit(){

   }


}
