import { Injectable } from '@angular/core';
import { Music } from './music';
import { Task } from 'zone.js/lib/zone-impl';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musics: Music[] =[
    // {
    //   "id": 1,
    //   "nomeBanda": "The Beatles",
    //   "nomeMusica": "Hey Jude",
    //   "nomeAlbum": "The Beatles (White Album)",
    //   "dataLancamento": "1968-08-26",
    //   "duracao": 431,
    //   "favorito": true
    // },
    // {
    //   "id": 2,
    //   "nomeBanda": "Queen",
    //   "nomeMusica": "Bohemian Rhapsody",
    //   "nomeAlbum": "A Night at the Opera",
    //   "dataLancamento": "1975-10-31",
    //   "duracao": 355,
    //   "favorito": false
    // }
  ]
  constructor() { 
    this.loadList();
  }

  getAll(): Music[]{
    return this.musics;
  }

  getById(id:number){
    const music = this.musics.find((value: Music): boolean => value.id == id);
    return music;
  }

  save(music: Music): void{
    if(music.id){
      const musicArr = this.getById(music.id);
      if(musicArr){
        musicArr.nomeMusica = music.nomeMusica
        musicArr.dataLancamento = music.dataLancamento
        musicArr.duracao = music.duracao
        musicArr.nomeAlbum = music.nomeAlbum
        musicArr.nomeBanda = music.nomeBanda
      }
    }else{
      const lastId = this.musics.length > 0 ?
      this.musics[this.musics.length-1].id : 0;
      music.id = lastId + 1;
      this.musics.push(music);
    }

    this.storelist();
  }

  delete(id: number){
    const musicIndex = this.musics.findIndex((value: Music) => value.id == id);
    this.musics.splice(musicIndex, 1);
    this.storelist();
  }

  private storelist(){
    window.localStorage.setItem('list-musics', JSON.stringify(this.musics));
  }

  private loadList(){
    const list = window.localStorage.getItem('list-musics');
    if (list){
      this.musics = JSON.parse(list);
    }
  }
}
