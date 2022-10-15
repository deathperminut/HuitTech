import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { PioneersComponent } from './pages/pioneers/pioneers.component';
import { NewsComponent } from './pages/news/news.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { NavOffCanvasComponent } from './Shared/nav-off-canvas/nav-off-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurTeamComponent,
    PioneersComponent,
    NewsComponent,
    NavBarComponent,
    NavOffCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
