import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FilterByNamesPipe } from './pipes/filter-by-names.pipe';
import { ContactsService } from './services/contacts.service';


const appRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsListComponent },
  {
    path: 'messages',
    component: MessagesComponent,
    // data: { title: 'Messages' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    LayoutComponent,
    NavbarComponent,
    MessagesComponent,
    FilterByNamesPipe,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
