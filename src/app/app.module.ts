import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CareComponent } from './components/care/care.component';
import { StoreComponent } from './components/store/store.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './components/admin/user-list/user-form/user-form.component';
import { ChartComponent } from './components/admin/chart/chart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/admin/user-list/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ActivitiesComponent,
    CareComponent,
    StoreComponent,
    AdminComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    UserListComponent,
    UserFormComponent,
    ChartComponent,
    LoginComponent,
    SignupComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
