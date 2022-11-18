import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRouters} from './app.routes';
import {DataService} from './data/data.service';
// import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { BadgeComponent } from './badge.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewCardComponent } from './view-card/view-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCardComponent } from './add-card/add-card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { TableUserComponent } from './table-user/table-user.component';
import { SearchPipe } from './search.pipe';
import { CardService } from './post.service';
// import { ServicesComponent } from './login/services.component';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    ViewCardComponent,
    AddCardComponent,
    BadgeComponent,
    LoginComponent,
    SignupComponent,
TableUserComponent,
    ViewCommentsComponent,
   
     SearchPipe
    // ServicesComponent,
    // LoginComponent,
    // PostDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouters,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
