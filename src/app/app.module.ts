import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { QualificationComponentComponent } from './qualification-component/qualification-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingsoonComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    QualificationComponentComponent,
    ProjectsComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
