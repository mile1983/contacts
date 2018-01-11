import { Component, OnInit } from '@angular/core';
import {FilterByNamesPipe} from '../../pipes/filter-by-names.pipe'
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


  
  contacts;
  searchTerm = ""; 

  constructor() {
    
    this.contacts = [      {
      firstName: 'John',
      lastName:  'Doe',
      email:     'john@example.com'
    },
    {
      firstName: 'Daniel',
      lastName:  'Ros',
      email:     'daniel@example.com'
    },
    {
      firstName: 'Martin',
      lastName:  'Hess',
      email:     'martin@example.com'
    },
    {
      firstName: 'Martin',
      lastName:  'Hessa',
      email:     'martin@example.com'
    }
  ];
   }
   removeContact(contact){
    
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
    
    //console.log(contact);

   }


  ngOnInit() {
  }

}
