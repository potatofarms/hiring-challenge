import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  media: string;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.getMedia();
  }

  getMedia(): void {
  
  }
}
