import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { DatePipe } from './date.pipe';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NewquoteComponent,
    DatePipe,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
