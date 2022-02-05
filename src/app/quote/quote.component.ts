import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()
  quotes!: Quote[];

  @Output() deleteQuote = new EventEmitter<number>();
  @Output() up = new EventEmitter<number>();
  @Output() down = new EventEmitter<number>();

  constructor() { }


  ngOnInit(): void {
  }

  removeQuote(index:number){
    this.deleteQuote.emit(index);
  }

  upvote(index:number){
    this.up.emit(index);
  }

  downvote(index:number){
    this.down.emit(index);
  }

}
