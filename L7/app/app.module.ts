import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {DisplayUsersComponent} from './display-users/display-users.component'


@NgModule({
  imports: [ BrowserModule, FormsModule
],
  declarations: [ AppComponent, DisplayUsersComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
