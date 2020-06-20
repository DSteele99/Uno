import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore: AngularFirestore) {
    this.getGame();
  }

  getGame() {
    return this.firestore.collection('Game').doc('Dan Game').snapshotChanges()
      .subscribe(res => {
        console.log('game service getGame is online',res.payload.data());
        });
  }
}
