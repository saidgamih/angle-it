import { Component, OnInit } from '@angular/core';
import Contact from '../shared/models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Contacts';
  contacts : Contact[] = [];
  contact: any = {
    id: "",
    name: "",
    phone: "",
    email: ""
  };
  
  ngOnInit(): void {
    this.loadContacts();
  }

  async loadContacts() {
    const results = await localStorage.getItem('contacts');
    if(results) {
      this.contacts = JSON.parse(results);
    } else {
      this.contacts = [];
    }
  }

  addContact() {
    const contact = Contact.createFromObject(this.contact);
    this.contacts.push(contact);
    this.contact = {};
    this.flushStorage();
  }

  deleteContact(target: string) {
    this.contacts = this.contacts.filter((contact) => contact.id !== target);
    this.flushStorage();
  }

  async flushStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
