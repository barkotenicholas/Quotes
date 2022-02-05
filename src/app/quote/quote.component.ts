import { Component, OnInit ,Input} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()
  quotes!: Quote[];
  constructor() { }

  ngOnInit(): void {
  }

}
