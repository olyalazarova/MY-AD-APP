import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AvatarDialogComponent } from './user/avatar-dialog/avatar-dialog.component';
import {NewUserComponent} from './user/new-user/new-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import { FirebaseService } from './services/firebase.service';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { SearchComponent } from './search/search.component';
import { DesignComponent } from './design/design.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';







const config = {
  firebase: {
    apiKey: "AIzaSyBCanKsmLnvXeKlDjHIMmwKhBA0Zf1GX0M",
    authDomain: "ad-app-f5b25.firebaseapp.com",
    databaseURL: "https://ad-app-f5b25.firebaseio.com",
    projectId: "ad-app-f5b25",
    storageBucket: "ad-app-f5b25.appspot.com",
    messagingSenderId: "727740100359",
    appId: "1:727740100359:web:ddf2cab69f45c2f9775fa2",
    measurementId: "G-PGB3BF9B2J"
  }
}


@NgModule({
  declarations: [
   
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AvatarDialogComponent,
    NewUserComponent,
    EditUserComponent,
    LoginUserComponent,
    ArchitectureComponent,
    SearchComponent,
    DesignComponent,
    PostDashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
     AngularFirestoreModule,
     AngularFireStorageModule,
     AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
