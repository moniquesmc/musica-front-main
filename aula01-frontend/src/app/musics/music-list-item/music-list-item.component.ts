import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Music } from '../shared/music';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicService } from '../shared/music.service';



@Component({
  selector: 'app-music-list-item',
  standalone: true,
  imports: [RouterLink, NgClass, FormsModule],
  templateUrl: './music-list-item.component.html',
  styleUrl: './music-list-item.component.scss'
})
export class MusicListItemComponent {

  @Input()
  music!: Music

  constructor(public musicService: MusicService){

  }

  onCompletedCheckChange(music: Music){
    this.musicService.save(music);
  }

  delete(music: Music){
    this.musicService.delete(music.id)
  }
}
