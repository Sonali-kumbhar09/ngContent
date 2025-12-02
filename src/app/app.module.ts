import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import {HttpClientModule} from "@angular/common/http";
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component'

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
