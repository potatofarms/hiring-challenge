import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import { MediaService } from '../media.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-media',
  templateUrl: './delete-media.component.html',
  styleUrls: ['./delete-media.component.css']
})
export class DeleteMediaComponent implements OnInit {

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // TODO: Confirm deletion with the user before actually deleting.

  // Delete using GET. This should be updated to be a form POST deletion probably.
  ngOnInit() {
    // Get the ID of the media item from the activated route.
    const id = +this.route.snapshot.paramMap.get('id');
    this.mediaService.deleteMediaItem(id);
  }

}
