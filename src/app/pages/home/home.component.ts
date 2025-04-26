import { Component } from '@angular/core';
import { AnimeCardComponent } from '../../common-ui/anime-card/anime-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
