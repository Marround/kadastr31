import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SectionsModule, routs} from './sections/index';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import { NavbarComponent } from './globcomp/navbar/navbar.component';
import {FooterComponent} from './globcomp/footer/footer.component';
import {HomeService} from './sections/home/home.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    SectionsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
