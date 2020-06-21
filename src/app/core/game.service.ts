import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: Game;
  gameLoadedTF = false;
  constructor(private firestore: AngularFirestore) {
    this.getGame();
  }

  getGame() {
    return this.firestore.collection('Game').doc('Dan Game').snapshotChanges()
      .subscribe(res => {
        console.log('game service getGame is online',res.payload.data());
        this.game = res.payload.data() as Game;
        this.gameLoadedTF = true;
        });
  }
}
