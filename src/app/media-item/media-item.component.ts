import { Component, OnInit, Input } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() media: Media;
  
  constructor() { }
  
  ngOnInit() {
  }
}
