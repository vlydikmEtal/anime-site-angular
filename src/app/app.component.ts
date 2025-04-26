import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common-ui/header/header.component';
import { TopAnimeComponent } from './common-ui/top-anime/top-anime.component';
import { routeAnimations } from './animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopAnimeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
