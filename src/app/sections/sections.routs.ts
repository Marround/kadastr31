import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ServicesComponent} from './services/services.component';

import { staticPagesRouts } from './services/staticpages/index';
import {NewsComponent} from './news/news.component';
import {ReviewsComponent} from './reviews/reviews.component';

export const routs = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'services', redirectTo: '/services/delimitationplan', pathMatch: 'full'},
  {path: 'services', component: ServicesComponent, children: staticPagesRouts},
  {path: 'news', component: NewsComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
]
