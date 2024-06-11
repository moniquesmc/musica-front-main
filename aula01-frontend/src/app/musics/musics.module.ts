import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicListComponent } from './music-list/music-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FormsModule, 
    MusicFormComponent,
    MusicListComponent
    
  ]
})
export class MusicsModule { }
