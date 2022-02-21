import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //captura los nuevos juegos
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  //obtiene un solo juego
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  //elimina un juego
  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  //añade un juego
  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  //actualiza un juego
  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }

}
