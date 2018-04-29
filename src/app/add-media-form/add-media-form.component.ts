import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-add-media-form',
  templateUrl: './add-media-form.component.html',
  styleUrls: ['./add-media-form.component.css']
})
export class AddMediaFormComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  model: Media = {
    id: null,
    title: '',
    description: '',
    url: '',
    thumb: ''
  };

  submitted = false;

  onSubmit() {
    this.mediaService.addMediaItem(this.model)
      .subscribe(media => this.model = media);
    this.submitted = true;
  }

  newMedia() {
    this.model = {
      id: null,
      title: '',
      description: '',
      url: '',
      thumb: ''
    }
  }

  ngOnInit() {
    this.newMedia();
  }

}
