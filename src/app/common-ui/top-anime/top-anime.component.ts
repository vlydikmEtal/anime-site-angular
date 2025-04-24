import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './../../data/services/card.service';

@Component({
  selector: 'app-top-anime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-anime.component.html',
  styleUrl: './top-anime.component.scss'
})
export class TopAnimeComponent {
  animeList: any[] = [];

  getEnglishTitle(anime: any): string {
    const englishTitle = anime.titles.find((t: any) => t.type === 'English');
    if (!englishTitle) return anime.title;
    return englishTitle.title.length > 20
      ? englishTitle.title.slice(0, 20) + '...'
      : englishTitle.title;
  }

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getTestAnime().subscribe({
      next: (res: any) => {
        this.animeList = res.data.filter((anime: any) => anime.score >= 8.9);
      },
      error: (err: any) => {
        console.error('Ошибка при загрузке аниме:', err);
      },
    });
  }
}
