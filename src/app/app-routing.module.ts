import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { HomeComponent } from './components/home/home.component';
import { CareComponent } from './components/care/care.component';
import { StoreComponent } from './components/store/store.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { adminAuthGuard } from './services/admin-auth.guard';
import { EditUserComponent } from './components/admin/user-list/edit-user/edit-user.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"activities", component:ActivitiesComponent},
  {path:"care", component:CareComponent},
  {path:"store", component:StoreComponent},
  {path:"admin", component:AdminComponent, canActivate:[adminAuthGuard]},
  {path:"about", component:AboutComponent},
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
