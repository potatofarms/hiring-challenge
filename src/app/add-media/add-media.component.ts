import { Component, OnInit } from '@angular/core';
import { Media } from '../media';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {
  constructor() { }

  m: Media = {
    id: null,
    title: '',
    description: '',
    url: '',
    thumb: ''
  };

  ngOnInit() {
  }
}
