import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(
      (res) => {
        this.games = res;
      },
      (err) => console.log(err)
    );
  }

  getGames() {
    this.gameService.getGames().subscribe(
      (res) => {
        this.games = res;
      },
      (err) => console.error(err)
    );
  }

  deleteGame(id: string) {
    this.gameService.deleteGame(id).subscribe(
      (res) => {
        console.log(res);
        this.getGames();
      },
      (err) => console.error(err)
    );
  }
}
