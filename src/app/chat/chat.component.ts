import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  chats: Chat[] = dummyChats;
  activeChatIndex: number = 0;
  inputText?: string;
  constructor() { }

  ngOnInit(): void {
  }
  setActiveChatId(id: number) {
    this.activeChatIndex = id;
  }
  send() {
    console.log("de");
    if(this.inputText) {
      this.chats[this.activeChatIndex].messages.push({isReceived: false, text: this.inputText});
      console.log(this.chats[this.activeChatIndex].messages);
      this.inputText = "";
    }
  }
}


const dummyChats: Chat[] = [
  { user: "Alexsey", avaImg: "https://avatars.mds.yandex.net/i?id=84cb8e303175817f6e4a18c46026d26b268f65a7-7663003-images-thumbs&n=13", messages: [
    { isReceived: true, text: 'Привет, сколько ммр' },
    { isReceived: false, text: 'Привет, я не играю в доту' },
    { isReceived: false, text: 'Давай лучше в csgo ' },
    { isReceived: true, text: 'Давай' },
    { isReceived: false, text: 'Давно играешь?' },
    { isReceived: true, text: '3 года' },
    { isReceived: false, text: 'Круто, а я 4 года' },
    { isReceived: true, text: 'Давай свой дискордик'},
    { isReceived: false, text: 'Пойдём туда'}

  ]}, 
  { user: "Mimik", avaImg: "assets/smile.png", messages: [
    { isReceived: true, text: 'Привет' },
    { isReceived: false, text: 'Привет' },
    { isReceived: true, text: 'Давай познакомимся' },
    { isReceived: true, text: 'Давай' },
    { isReceived: false, text: 'Вот мой дискорд: Mimik' }
  ]}
]


interface Chat {
  user: string,
  avaImg: string,
  messages: Messages[]
}

interface Messages {
  isReceived: Boolean,
  text: string
}