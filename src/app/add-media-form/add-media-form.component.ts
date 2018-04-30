import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../media';
import { MediaService } from '../media.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-add-media-form',
  templateUrl: './add-media-form.component.html',
  styleUrls: ['./add-media-form.component.css']
})
export class AddMediaFormComponent implements OnInit {
  @Input() model: Media;
  @Input() formtype: string;

  constructor(
    private mediaService: MediaService
  ) { }

  submitted = false;

  onSubmit() {
    // form for adding a new record.
    if (this.formtype === "add") {
      this.mediaService.getLastId().first().subscribe(id => {
        this.model.id = id + 1;
        this.mediaService.addMediaItem(this.model);
        this.submitted = true;
      });
    // form for editing an existing record.
    } else if (this.formtype === "edit") {
      this.mediaService.updateMediaItem(this.model);
    }
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
  }

}
