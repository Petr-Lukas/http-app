import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { AppErrorHandler } from 'common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpRequestComponent,
    FollowersComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {
        path:'',
        component:HomeComponent
    },
    {
      path:'followers/:username',
    component:ProfileComponent
    },
    {
      path:'followers',
    component:FollowersComponent
    },
    {
      path:'post',
    component:HttpRequestComponent
    },
    {
      path:'**',
    component:NotfoundComponent
    }

  ])

  ],
  providers: [
    {provide:ErrorHandler,useClass:AppErrorHandler }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
