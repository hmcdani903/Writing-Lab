import { Component, OnInit } from '@angular/core';

// ng chat
import * as firebase from 'firebase';
import { ChatParticipantStatus, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { AuthService } from '../shared/services/auth.service';
import { MyAdapter } from './my-adapter';

const db = firebase.firestore();

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  // ng chat
  currentUserId;
  loadedUsers: IChatParticipant[] = [];
  adapter: MyAdapter;
  recentMessageSent: String;

  constructor(public authService: AuthService) {
    db.collection('chat').doc(localStorage.getItem('recentMessageId')).get().then(res => {
      console.log(res.data().message);
    });

    this.currentUserId = authService.isLoggedIn ? JSON.parse(localStorage.getItem('user')).uid : 999;

    let users = JSON.parse(localStorage.getItem('loadedUsers'));
    for(let i = 0; i < users.length; i++){
      this.loadedUsers.push({
        participantType: ChatParticipantType.User,
        id: users[i].id,
        displayName: users[i].email,
        avatar: users[i].photo,
        status: ChatParticipantStatus.Online
      })
    }
    this.adapter = new MyAdapter(this.loadedUsers);
  }

  getRecentMessageSent(){
    
    return localStorage.getItem('recentMessage');
  }
  recentMessageSentIsEmpty(){
    if (localStorage.getItem('recentMessage') == ''){
      return true;
    }
    else return false;
  }
  changeMessage(newMessage: String){
    console.log(newMessage);
    db.collection('chat').doc(localStorage.getItem('recentMessageId')).update({message: newMessage});
    localStorage.setItem("recentMessage", newMessage.valueOf());
  }

  ngOnInit(): void {}
}
