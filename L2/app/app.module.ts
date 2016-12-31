// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
//
// // AppComponent is that thing which we have exported in our app.component.ts
//
// // We can omit .ts extension in last import
//
// @NgModule({
//     imports: [BrowserModule],
//     declarations : [AppComponent],
//     bootstrap : [ AppComponent ]
//   })
//
// // We need the BrowserModule, we add that to the import array
// // We have our AppComponent that we formed, we need to declare that and bootstrap it and hence in the declarations and bootsrap array
// // Bootstrapping means we are going to pack it and use it in our application
//
// export class AppModule{}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule
],
  declarations: [ AppComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
