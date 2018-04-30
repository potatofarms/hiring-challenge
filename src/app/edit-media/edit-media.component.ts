import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../media.service';
import { Media } from '../media';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-media',
  templateUrl: './edit-media.component.html',
  styleUrls: ['./edit-media.component.css']
})
export class EditMediaComponent implements OnInit {
  mediaObservable: Observable<any[]>;
  media: Media;
  
  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // Get the ID of the media item from the activated route.
    const id = +this.route.snapshot.paramMap.get('id');
    // Get a copy of the object from the firebase DB.
    this.mediaObservable = this.mediaService.getMediaItem(id);
    // Extract the media object from the firebase observable.
    this.mediaObservable.first().subscribe(data => this.media = <Media>data[0]);
  }

}
