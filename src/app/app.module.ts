import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MediaComponent } from './media/media.component';
import { MediaService } from './media.service';
import { MediaItemComponent } from './media-item/media-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
