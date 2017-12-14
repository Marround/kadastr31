import {DelimitationplanComponent} from './delimitationplan/delimitationplan.component';
export const staticPagesRouts = [
  {path: 'delimitationplan', component: DelimitationplanComponent},
  {path: '**', redirectTo: '/home'}
]
