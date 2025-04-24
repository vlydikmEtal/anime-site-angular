import { CardService } from './../../data/services/card.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopAnimeComponent } from '../top-anime/top-anime.component';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [CommonModule, TopAnimeComponent],
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
})
export class AnimeCardComponent {
  animeList: any[] = [];

  groupAnimeByGenre(animeList: any[]) {
    return animeList.reduce((acc: any, anime: any) => {
      anime.genres.forEach((genre: any) => {
        if (!acc[genre.name]) {
          acc[genre.name] = [];
        }
        acc[genre.name].push(anime);
      });
      return acc;
    }, {});
  }

  getGenres(anime: any): string[] {
    return anime.genres.map((genre: any) => genre.name);
  }

  getEnglishTitle(anime: any): string {
    const englishTitle = anime.titles.find((t: any) => t.type === 'English');
    if (!englishTitle) return anime.title;
    return englishTitle.title.length > 20
      ? englishTitle.title.slice(0, 20) + '...'
      : englishTitle.title;
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getTestAnime().subscribe({
      next: (res: any) => {
        this.animeList = res.data;
      },
      error: (err: any) => {
        console.error('Ошибка при загрузке аниме:', err);
      },
    });
  }
}
