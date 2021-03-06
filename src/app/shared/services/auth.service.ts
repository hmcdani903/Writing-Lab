import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // Sign In 
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone,
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
    
    /* Load users */
    this.afs.collection('users').get().subscribe(users => {
      let loadedUsers = [];
      users.forEach(user => {
        loadedUsers.push({
          "id": user.data().uid,
          "email": user.data().email,
          "photo": user.data().photoURL
        })
      })
      localStorage.setItem('loadedUsers', JSON.stringify(loadedUsers));
    })

    /* Load messages */
    this.afs.collection('chat').get().subscribe(messages => {
      let loadedMessages = [];
      messages.forEach(message => {
        // console.log(message.data());
        loadedMessages.push({
          "from": message.data().from,
          "to": message.data().to,
          "message": message.data().message,
          "time": message.data().time
        })
      })
      localStorage.setItem('loadedMessages', JSON.stringify(loadedMessages));
    })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/appointments']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
        this.router.navigate(['/appointments']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    /* and email is verified */
    // return (user !== null && user.emailVerified !== false) ? true : false;
    return (user !== null) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['/appointments']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/signin']);
    })
  }

  // Deletes the firebase account
  // next up: delete messages
  DeleteAccount(){
    if(confirm('Are you sure you wish to delete your account?')){
      if(confirm('This action cannot be undone. Please confirm that the account will be deleted.')){
        return this.afAuth.signOut().then(() => {
          this.afs.doc(`users/${JSON.parse(localStorage.getItem('user')).uid}`).delete();
          localStorage.removeItem('user');
          this.router.navigate(['/signin']);
        })
      }
    }
  }

  DeleteAllMyMessages(){
    if(confirm('Are you sure you wish to delete your messages?')){
      if(confirm('This action cannot be undone. Please confirm the messages you sent will be deleted. After this is done, you will have to sign-in again.')){
        return this.afAuth.signOut().then(() => {
          this.afs.collection('chat').get().subscribe(messages => {
            messages.forEach(m => {
              if(m.data().from == JSON.parse(localStorage.getItem('user')).uid){
                this.afs.doc(`chat/${m.id}`).delete();
              }
            })
          });
          localStorage.removeItem('user');
          this.router.navigate(['/signin']);
        })
      }
    }
  }

}