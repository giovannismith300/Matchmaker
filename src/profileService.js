import { doc, getDoc, setDoc } from 'firebase/firestore';
import { responses } from './Quiz';
import { db } from './firebase';
import { Profile } from './profile';

class ProfileService {
  constructor() {
    this.collection = 'Info';
  }

  async saveProfile(profile) {
    
    
    const docRef = doc(db, this.collection, profile.name);

    await setDoc(docRef, profile.toJson());
  }

  async fetchProfile(user) {
    const docRef = doc(db, this.collection, user.uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return Profile.fromFirebase(docSnap);
    } else {
      return new Profile(user.uid);
    }
  }
}

const service = new ProfileService();
export default service;
