import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MediaService } from '../media.service';
import { Media } from '../media';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {
  mediaItem: Media;

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMediaItem();
  }

  getMediaItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mediaService.getMediaItem(id)
      .subscribe(mediaItem => this.mediaItem = mediaItem);
  }

}
