export class Quote {

  authorsname: string;
  publishersname: string;
  qoute: string;
  upvote: number;
  downvote: number;
  quoteDate: Date
  constructor(authorsname: string,publishersname: string,qoute: string,upvote: number,downvote: number,quoteDate:Date) {

    this.authorsname = authorsname;
    this.publishersname = publishersname;
    this.upvote = upvote;
    this.downvote = downvote;
    this.qoute = qoute;
    this.quoteDate = quoteDate;

  }
}
