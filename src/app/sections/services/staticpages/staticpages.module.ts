import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DelimitationplanComponent } from './delimitationplan/delimitationplan.component';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  declarations: [DelimitationplanComponent],
  exports: [DelimitationplanComponent]
})

export class StaticPagesModule {

}
