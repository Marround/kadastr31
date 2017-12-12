import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';

export const routs = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
