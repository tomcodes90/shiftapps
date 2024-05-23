import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  constructor() {
    const aCollection = collection(this.firestore, 'users');
    this.items$ = collectionData(aCollection);
  }
}
