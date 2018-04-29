import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'media', pathMatch: 'full' },
  { path: 'media', component: MediaComponent },
  { path: 'details/:id', component: MediaDetailsComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
