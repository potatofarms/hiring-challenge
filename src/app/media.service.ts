import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Media } from './media';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MediaService {
  private mediaUrl = 'api/media';

  constructor(
    private http: HttpClient
  ) { }

  // Currently just a wrapper for console.log.
  // Replace with a different logger in the future.
  log(message: string): void {
    console.log(message);
  }

  // GET Media
  getMedia(): Observable<Media[]> {
    return this.http.get<Media[]>(this.mediaUrl)
      .pipe(
        tap(heroes => this.log(`Got Media!`)),
        catchError(this.handleError('getMedia', []))
      );
  }

  // GET Media with specific ID.
  getMediaItem(id: number): Observable<Media> {
    // URL To make the GET 
    const url = `${this.mediaUrl}/${id}`;
    return this.http.get<Media>(url)
      .pipe(
        tap(_ => this.log(`Got Media with ID: ${id}`)),
        catchError(this.handleError<Media>(`getMedia id: ${id}`))
      )
  }

  // POST Media
  addMediaItem(media: Media): Observable<Media> {
    return this.http.post<Media>(this.mediaUrl, media, httpOptions)
      .pipe(
        tap((media: Media) => this.log(`added media with ID ${media.id}.`)),
        catchError(this.handleError<Media>('addMediaItem'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Log error to the web browser's console.
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T); // display a message, but keep the app running.
    }
  }
}
