import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { PartenershipComponent } from './user/partenership/partenership.component';
import { InformationMaterialsComponent } from './user/information-materials/information-materials.component';
import { EventsComponent } from './user/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    PartenershipComponent,
    InformationMaterialsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
