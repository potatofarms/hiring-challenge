import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {
  mediaObservable: Observable<any[]>;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    // Get a firebase asynchronous observable with all of the media items in it.
    // Can be iterated over in the view.
    this.mediaObservable = this.mediaService.getMedia();
  }

}
