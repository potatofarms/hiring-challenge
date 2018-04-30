import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MediaComponent } from './media/media.component';
import { MediaService } from './media.service';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { AddMediaFormComponent } from './add-media-form/add-media-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { EditMediaComponent } from './edit-media/edit-media.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaItemComponent,
    MediaDetailsComponent,
    AddMediaComponent,
    AddMediaFormComponent,
    EditMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
