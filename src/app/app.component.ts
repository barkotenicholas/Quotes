import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  quotes:Quote[] =[
    { authorsname:"Albert Einsten",
    publishersname:"Nicholas",
    upvote:1,
    downvote:0,
    qoute:"If you can't explain it to a six year old, you don't understand it yourself. ",
    quoteDate: new Date(2020,1,1)
    
  }
  ]
}
