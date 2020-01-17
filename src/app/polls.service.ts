import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = ' https://hn.algolia.com/api/v1/';

@Injectable({
  providedIn: 'root'
})

export class PollsService {

  constructor(private http:HttpClient) {
    
   }
   get(): Observable<any> {
    return this.http.get(endpoint + 'search_by_date?tags=story');
  }
}
