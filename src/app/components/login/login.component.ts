import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private as:AdminService,private us:UserService, public router:Router){

  }
  name:string = ''
  password:string = ''
  isAdmin:boolean = false;
  isError:boolean = false;

  adminData:Admin[]
  userData:User[]

  adminOrUser(){
    this.isAdmin = !this.isAdmin
    console.log("is admin : "+this.isAdmin)
  }
  onLoginBtnClicked(form:any){
    console.log(this.isAdmin)
    if (this.isAdmin){
      this.loginAsAdmin(form)
    }
    else{
      this.loginAsUser(form)
    }
  }


  loginAsAdmin(form:any){
    this.as.checkAdminDetails().subscribe((data:Admin[])=>{
      this.adminData = data
      var user = this.adminData.find((data)=>{
        return data.name === form.value.name && data.password === form.value.password
      })

      if (user){
        this.as.adminName = user.name
        this.as.adminPassword = user.password
        localStorage.setItem("userName", user.name)
        localStorage.setItem("isUserOrAdmin", 'admin')
        localStorage.setItem("user", JSON.stringify(user))
        this.router.navigate(['/home'])
      }
      else{
        this.isError = true
      }
    })
  }
  loginAsUser(form:any){
    this.us.checkUserDetails().subscribe((data:User[])=>{
      this.userData = data
      var user = this.userData.find((data)=>{
        return data.name === form.value.name && data.password === form.value.password
      })

      if (user){
        this.as.adminName = user.name
        this.as.adminPassword = user.password
        localStorage.setItem("userName", user.name)
        localStorage.setItem("isUserOrAdmin", 'user')
        localStorage.setItem("user", JSON.stringify(user))
        this.router.navigate(['/home'])
      }
      else{
        this.isError = true
      }
    })
  }

 
}
