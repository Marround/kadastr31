import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ServicesComponent} from './services/services.component';

import { staticPagesRouts } from './services/staticpages/index';

export const routs = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'services', component: ServicesComponent, cildren: staticPagesRouts},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
]
