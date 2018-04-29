import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { PersonDeleteDialogComponent } from './person-delete-dialog/person-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleComponent,
    PersonDialogComponent,
    PersonDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [
    AppComponent,
    PersonDialogComponent,
    PersonDeleteDialogComponent
  ]
})
export class AppModule { }
