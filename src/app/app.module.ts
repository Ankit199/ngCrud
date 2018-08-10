import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UpdateComponent } from './update/update.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserloginService } from './userlogin.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavbardComponent } from './navbard/navbard.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
const appRoutes: Routes = [

  { path: '', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'update/:id', component: UpdateComponent },
  {path: 'nav', component: NavbardComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    UserlistComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent,
    NavbardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,


  ],
  providers: [UserloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
