import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  http = inject(HttpClient)

  baseUrl = 'https://api.jikan.moe/v4/top/anime'

  getTestAnime(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}
