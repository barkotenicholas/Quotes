import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {

  newQuote = new Quote("","",0,0,"",new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    this.addQuote.emit(this.newQuote);
  }

}
