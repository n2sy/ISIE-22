import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { DirectComponent } from './direct/direct.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, ListeComponent, DetailsComponent, ItemComponent, DirectComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
