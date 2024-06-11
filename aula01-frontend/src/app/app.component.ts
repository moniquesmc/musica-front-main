import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicListComponent } from "./musics/music-list/music-list.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MusicListComponent]
})
export class AppComponent {
  title = 'Músicas';

}
