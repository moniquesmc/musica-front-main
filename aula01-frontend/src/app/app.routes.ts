import { Routes } from '@angular/router';
import { MusicListComponent } from './musics/music-list/music-list.component';
import { MusicFormComponent } from './musics/music-form/music-form.component';

export const routes: Routes = [
    {path:'', component: MusicListComponent},
    {path:'new', component: MusicFormComponent},
    {path:'edit/:id', component: MusicFormComponent},


];
