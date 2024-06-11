import { Component, OnInit } from '@angular/core';
import { Music } from '../shared/music';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../shared/music.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-music-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './music-form.component.html',
  styleUrl: './music-form.component.scss'
})
export class MusicFormComponent implements OnInit{
    music: Music = new Music();
    title: string = 'Nova Musica';

    constructor(
      private activateRouded: ActivatedRoute,
      private router: Router,
      private musicService: MusicService
){}

  ngOnInit(): void {
    const id = this.activateRouded.snapshot.paramMap.get('id');
    console.log("Edição do ID:" + id);
    if(id){
      const musicAux: Music | undefined = this.musicService.getById(parseInt(id));
      if(musicAux){
        this.music = musicAux;
        this.title = 'Alterando Música';
      }
    }
  }

  OnSubmit(){
    this.musicService.save(this.music);
    this.router.navigate([''])
  }
}
