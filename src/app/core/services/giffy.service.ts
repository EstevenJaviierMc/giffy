import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Query } from '@shared/models/Query';

@Injectable({
  providedIn: 'root',
})
export class GiffyService {
  private limit: number = 15;
  private page: number = 0;

  constructor(private http: HttpClient) {}

  searchGifs(q?: Query): Observable<any> {
    const url = new URLSearchParams({
      api_key: environment.apiKey,
      q: q?.keyword || 'beth',
      limit: this.limit,
      offset: this.page * this.limit,
      rating: q?.rating || 'g',
      lang: 'es',
    } as any);

    return this.http
      .get(`${environment.endpoint}/gifs/search?${url}`)
      .pipe(map(data => data));
  }

  getGifById(id: string): Observable<any> {
    const url = new URLSearchParams({
      api_key: environment.apiKey,
      limit: this.limit,
      offset: this.page * this.limit,
      rating: 'g',
      lang: 'es',
    } as any);

    return this.http
      .get(`${environment.endpoint}/gifs/${id}?${url}`)
      .pipe(map(data => data));
  }

  getTrending(): Observable<any> {
    const url = new URLSearchParams({
      api_key: environment.apiKey,
    } as any);
    return this.http.get(
      `${environment.endpoint}/trending/searches?${url}`
    );
  }
}
