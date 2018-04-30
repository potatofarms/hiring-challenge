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
    const id = +this.route.snapshot.paramMap.get('id');
    this.mediaObservable = this.mediaService.getMediaItem(id);
    this.mediaObservable.first().subscribe(data => this.media = <Media>data[0]);
  }

}
