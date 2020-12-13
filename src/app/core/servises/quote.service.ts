import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from '../models/quote';

@Injectable({
  providedIn: 'root'
})

export class QuoteApiService {

  constructor(private http: HttpClient) {
  }

  loadQuotes(author): Observable<Quote[]>{
    return this.http.get<any>(`https://www.breakingbadapi.com/api/quote?author=${author}`);
  }
}
