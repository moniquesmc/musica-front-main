import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';
import { Music } from '../shared/music';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MusicListItemComponent } from '../music-list-item/music-list-item.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [RouterLink, NgForOf, MusicListItemComponent, NgIf],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit{
  musics: Music[] =[]
music: any;


  constructor(public musicService: MusicService) {}

  ngOnInit(): void{
    this.musics = this.musicService.getAll()
    //console.log('Musics', JSON.stringify(this.musics))
    
  }


}
