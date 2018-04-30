import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { EditMediaComponent } from './edit-media/edit-media.component';
import { DeleteMediaComponent } from './delete-media/delete-media.component';

const routes: Routes = [
  { path: '', redirectTo: 'media', pathMatch: 'full' },
  { path: 'media', component: MediaComponent },
  { path: 'details/:id', component: MediaDetailsComponent },
  { path: 'add', component: AddMediaComponent },
  { path: 'edit/:id', component: EditMediaComponent },
  { path: 'delete/:id', component: DeleteMediaComponent }
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
