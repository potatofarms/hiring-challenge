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
  @Input() model: Media;      // The preset data to fill out the form with.
  // The type of form to use for how to handle submit. 
  // 'add': Form to create a new media item on submit.
  // 'edit': Form to update an existing media item on submit.
  @Input() formtype: string;  

  constructor(
    private mediaService: MediaService
  ) { }

  submitted = false;

  // When the form submit button is pressed, this function will be called.
  onSubmit() {
    // form for adding a new record.
    if (this.formtype === "add") {
      // Get the last media item's id and increment it by 1 because
      // angular does not have auto incrementing integer ids.
      this.mediaService.getLastId().first().subscribe(id => {
        this.model.id = id + 1;
        this.mediaService.addMediaItem(this.model);
        // Display to the user that the media record has been added.
        this.submitted = true;
      });
    // form for editing an existing record.
    } else if (this.formtype === "edit") {
      this.mediaService.updateMediaItem(this.model);
    }
  }

  // Reset the data model binding with the html form to a blank state.
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
