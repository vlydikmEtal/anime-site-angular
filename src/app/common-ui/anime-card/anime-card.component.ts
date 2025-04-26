import { CardService } from './../../data/services/card.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Anime {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
  score: number;
  members: number;
  genres: { mal_id: number; name: string }[];
  titles: { type: string; title: string }[];
}

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
})
export class AnimeCardComponent {
  animeList: Anime[] = [];

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit() {
    this.cardService.getTestAnime().subscribe({
      next: (res: any) => {
        this.animeList = res.data;
      },
      error: (err: any) => {
        console.error('Error loading anime:', err);
      },
    });
  }

  groupAnimeByGenre(animeList: Anime[]): { [key: string]: Anime[] } {
    return animeList.reduce((acc: any, anime: Anime) => {
      anime.genres.forEach((genre: { name: string }) => {
        if (!acc[genre.name]) {
          acc[genre.name] = [];
        }
        acc[genre.name].push(anime);
      });
      return acc;
    }, {});
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getGenres(anime: Anime): { mal_id: number; name: string }[] {
    return anime.genres || [];
  }

  getEnglishTitle(anime: Anime): string {
    const englishTitle = anime.titles?.find((t: any) => t.type === 'English');
    if (!englishTitle) return anime.title;
    return englishTitle.title.length > 20
      ? englishTitle.title.slice(0, 20) + '...'
      : englishTitle.title;
  }

  navigateToAnimeList(animeId: number) {
    this.router.navigate(['/anime-list', animeId]).catch((err) => {
    });
  }
}
