import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  createUser(value){
    return this.db.collection('user').add({
      name: value.name,
      
      surname: value.surname,
      
      email: value.email,
      emailToSearch: value.email.toLowerCase(),
      password: value.password
    });
  }

  getUser(userKey){
    return this.db.collection('user').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('user').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('user').doc(userKey).delete();
  }

}
