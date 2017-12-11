import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatButtonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class SectionsModule {

}
