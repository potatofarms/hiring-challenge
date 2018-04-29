import { Component, OnInit } from '@angular/core';
import { Media } from '../media';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  add(title: string, description: string, url: string, thumb: string): void {
    // Get rid of trailing and leading spaces in the input.
    title = title.trim();
    description = description.trim();
    url = url.trim();
    thumb = thumb.trim();
    // Validate the input.
    if (!this.validate(title, description, url, thumb)) {
      return;
    }
  }

  validate(title: string, description: string, url: string, thumb:string): boolean {
    return true;
  }
}
