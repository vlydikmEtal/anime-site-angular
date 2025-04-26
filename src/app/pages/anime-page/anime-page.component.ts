import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from './../../data/services/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss'],
})
export class AnimePageComponent {
  anime: any = null;

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const animeId = params.get('animeId');
      if (animeId) {
        this.loadAnimeById(+animeId);
      }
    });
  }

  loadAnimeById(animeId: number) {
    this.cardService.getTestAnime().subscribe({
      next: (res: any) => {
        // Получаем данные аниме по id
        this.anime = res.data.find((item: any) => item.mal_id === animeId);
      },
      error: (err: any) => {
        console.error('Ошибка при загрузке аниме:', err);
      },
    });
  }

  watchAnime() {
    if (this.anime) {
      const searchQuery = encodeURIComponent(this.anime.title + ' anime trailer');
      const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
      window.open(youtubeUrl, '_blank');
    }
  }
}
