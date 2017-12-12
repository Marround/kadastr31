import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  declarations: [HomeComponent, ContactsComponent],
  exports: [HomeComponent, ContactsComponent]
})

export class SectionsModule {

}
