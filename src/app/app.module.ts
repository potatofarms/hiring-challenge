import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule,
    // remove below when using a real api server.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
