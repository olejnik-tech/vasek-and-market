import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HarmonogramComponent } from './harmonogram/harmonogram.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PresentsComponent } from './presents/presents.component';
import { StoryComponent } from './story/story.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'harmonogram', component: HarmonogramComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'photos', component: GalleryComponent},
  {path: 'presents', component: PresentsComponent},
  {path: 'story', component: StoryComponent},
  {path: 'info', component: InfoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
