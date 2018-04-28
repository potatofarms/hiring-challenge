import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Media } from './media';
import { MEDIA } from './fake-media';

@Injectable()
export class MediaService {
  constructor() { }

  getMedia(): Observable<Media[]> {
    return of(MEDIA);
  }
}
