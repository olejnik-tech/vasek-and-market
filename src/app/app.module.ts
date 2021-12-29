import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HarmonogramComponent } from './harmonogram/harmonogram.component';
import { StoryComponent } from './story/story.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PresentsComponent } from './presents/presents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    NewsComponent,
    HarmonogramComponent,
    StoryComponent,
    GalleryComponent,
    PresentsComponent,
    ContactsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
