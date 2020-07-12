import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInAuthGuard } from './guards/logged-in-auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
// import { ImageProcessingComponent } from './image-processing/image-processing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProjectContentComponent } from './project-content/project-content.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, HeaderComponent, HomeComponent, ProjectContentComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ButtonModule, FileUploadModule, CardModule, ProgressBarModule,
    HttpClientModule, ReactiveFormsModule, FormsModule,
    UsersModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, LoggedInAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
