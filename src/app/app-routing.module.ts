import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { MusicComponent} from './music/music.component';
import { ProjectsComponent } from './projects/projects.component';
import { HairDressingComponent } from './hair-dressing/hair-dressing.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Music', component: MusicComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'HairDressing', component: HairDressingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
