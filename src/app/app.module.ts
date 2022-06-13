import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MainComponent } from './components/main/main.component';
import { MainSectionListComponent } from './components/main-section-list/main-section-list.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MainFeaturesListComponent } from './components/main-features-list/main-features-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    MainComponent,
    MainSectionListComponent,
    MainContentComponent,
    MainFeaturesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
