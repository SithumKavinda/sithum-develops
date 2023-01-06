import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { QualificationComponentComponent } from './qualification-component/qualification-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'qualifications', component: QualificationComponentComponent },
  { path: 'projects', component: ProjectsComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
