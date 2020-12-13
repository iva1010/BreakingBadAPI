import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Quote} from '../../core/models/quote';
import {QuoteApiService} from '../../core/servises/quote.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  private author;
  private subs: Subscription;
  quotes: Quote[];


  constructor(private quoteApiService: QuoteApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subs = this.route.params.pipe(
      mergeMap((params: Params): Observable<Quote[]> => {
        this.author = params['author'];
        return this.quoteApiService.loadQuotes(this.author);
      })
    ).subscribe((quotes: Quote[]) => this.quotes = quotes);
  }

}
