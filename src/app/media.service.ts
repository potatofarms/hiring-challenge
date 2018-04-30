import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Media } from './media';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take'

@Injectable()
export class MediaService {
  private mediaUrl = 'api/media';
  private listPath = '/media';

  constructor(
    private db: AngularFireDatabase
  ) { }

  // Currently just a wrapper for console.log.
  // Replace with a different logger in the future.
  log(message: string): void {
    console.log(message);
  }

  getLastId(): Observable<number> {
    let media: Observable<Media[]> = this.db.list<Media>(this.listPath, ref => ref.orderByChild('id').limitToLast(1)).valueChanges();
    return media.map(items => {
      console.log(items);
      return items[0].id
    });
  }

  // GET Media
  getMedia(): Observable<any[]> {
    return this.db.list(this.listPath).valueChanges();
  }

  // GET Media with specific ID.
  getMediaItem(id: number): Observable<any[]> {
    return this.db.list(this.listPath, ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }

  // POST Media
  addMediaItem(media: Media): void {
    this.db.list(this.listPath).push(media);
  }
}
