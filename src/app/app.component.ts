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
    quoteDate: new Date(2030,3,14),
    isTrue:false
  }
  ]

  addNewQuote(quote:Quote){

    quote.downvote = 0;
    quote.upvote = 0;
    this.quotes.push(quote);

  }
  deleteQuote(i:number){

    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[i].authorsname}?`)

      if (toDelete){
        this.quotes.splice(i,1)
      } 
  }

  upvote(i:number){
    var goal = this.quotes[i];
    goal.upvote +=1;
  }
  down(i:number){
    var goal = this.quotes[i];
    goal.downvote +=1;

  }

}
