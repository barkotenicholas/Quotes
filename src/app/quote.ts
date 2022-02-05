export class Quote {

  authorsname: string;
  publishersname: string;
  upvote: number;
  downvote: number;
  quoteDate: Date
  qoute: string;
  isTrue:boolean;
  constructor(authorsname: string,publishersname: string, upvote:number,downvote:number ,qoute: string,quoteDate:Date) {

    this.authorsname = authorsname;
    this.publishersname = publishersname;
    this.upvote = upvote;
    this.downvote = downvote;
    this.qoute = qoute;
    this.quoteDate = quoteDate;
    this.isTrue = true;
  }
}
