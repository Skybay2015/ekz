import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { WhyweComponent } from './whywe/whywe.component';

import { FooterComponent } from './footer/footer.component';
import { FreetimeComponent } from './freetime/freetime.component';
import { ContactsComponent } from './contacts/contacts.component';

import { TonewstudentsComponent } from './tonewstudents/tonewstudents.component';


import { AboutusComponent } from './aboutus/aboutus.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AspirantuComponent } from './aspirantu/aspirantu.component';
import { SupportComponent } from './support/support.component';

import { HomePageComponent } from './home-page/home-page.component';
import { SecondpageComponent } from './secondpage/secondpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhyweComponent,
    FooterComponent,
    FreetimeComponent,
    ContactsComponent,
    TonewstudentsComponent,
    FooterComponent,
    FreetimeComponent,
    AboutusComponent,
    TeachersComponent,
    AspirantuComponent,
    SupportComponent,
    HomePageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
