import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import {staticPagesRouts} from './services/staticpages/staticpages.routs';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(staticPagesRouts),
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [HomeComponent, ContactsComponent, ServicesComponent],
  exports: [HomeComponent, ContactsComponent, ServicesComponent]
})

export class SectionsModule {

}
