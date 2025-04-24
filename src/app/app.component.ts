import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeCardComponent } from './common-ui/anime-card/anime-card.component';
import { HeaderComponent } from './common-ui/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeCardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anime-site';
}
