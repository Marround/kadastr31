import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  declarations: [HomeComponent, ContactsComponent, ServicesComponent],
  exports: [HomeComponent, ContactsComponent, ServicesComponent]
})

export class SectionsModule {

}
