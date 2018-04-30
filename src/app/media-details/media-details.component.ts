import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Media } from '../media';
import { MediaService } from '../media.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})

export class MediaDetailsComponent implements OnInit {
  mediaObservable: Observable<any[]>;

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mediaObservable = this.mediaService.getMediaItem(id);
  }
}
