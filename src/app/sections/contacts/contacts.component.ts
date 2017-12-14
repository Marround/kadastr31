import { Component, OnInit } from '@angular/core';

export class Message {
  constructor(public neme: string,
              public email: string,
              public phone: string,
              public text: string) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  message: Message;

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }

}

// const xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
// xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
// xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// xmlhttp.onreadystatechange = function() {
//   if (xmlhttp.readyState == 4) {
//     if(xmlhttp.status == 200) alert('Mail sended!')
//     else if(xmlhttp.status == 500) alert('Check apikey')
//     else alert('Request error');
//   }
// }
// xmlhttp.send(JSON.stringify({'key': 'y2cQvBBfdFoZNByVaKsJsA',
//   'message': {
//     'from_email': 'marround(d0g)yandex.ru'.replace(/\(d0g\)/, '@'),
//     'to': [{'email': 'marround(d0g)intbel.ru'.replace(/\(d0g\)/, '@'), 'type': 'to'}],
//     'autotext': 'true',
//     'subject': 'Feed back',
//     'html': '<h1>' + this.message.neme + '</h1><br><p>' + this.message.text + '</p>'
//   }}));


// var mail = actions.create("mail");
// mail.parameters.to = "boltaev@kristallcom.ru";
// mail.parameters.subject = "Hello from JavaScript";
// mail.parameters.from = "alfresco@kristallcom.ru";
// mail.parameters.text = "some text, in case template is not found";
// mail.execute(document);
