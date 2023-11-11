import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private as:AdminService, private us:UserService){

  }

  name:string;
  gender:string;
  mobile:string;
  mail:string;
  subtype:string;
  status:string;
  password:string;
  cpassword:string;
  isAdmin:boolean = false

  enabled:boolean = false;

  onCpasswordInput(formGroup:any){
    // if (this.name !== '' && this.mobile !== '' && this.password!=='' && this.cpassword !== '' && this.password === this.cpassword){
    //   this.enabled = true
    //   document.getElementById("signupBtn").classList.remove('signupBtn')
    // }
    // else{
    //   this.enabled = false;
    //   document.getElementById("signupBtn").classList.add('signupBtn')
    // }
    if (formGroup.valid && this.password === this.cpassword){
      this.enabled = true
      document.getElementById("signupBtn").classList.remove('signupBtn')
    }
    else{
        this.enabled = false;
        document.getElementById("signupBtn").classList.add('signupBtn')
    }
    
  }

  adminData:Admin;
  userData:User;
  onSignUpBtnClicked(formGroup:any){
    console.log(formGroup.value)
   if(this.isAdmin){
    this.adminData = formGroup.value
    this.as.addAdminDetails(this.adminData)
    alert("successfully signed Up....\n please login")
   }
   else{
    this.userData = formGroup.value
    this.us.addUsersFromSignup(this.userData)
    // console.log(this.userData)
    alert("successfully signed Up....\n please login")
   }
    this.resetForm()
  }

  resetForm(){
    this.name = '';
    this.gender = ''
    this.mobile = ''
    this.mail = ''
    this.subtype = ''
    this.status = ''
    this.password = ''
    this.cpassword = ''
  }

  signUpAsAdmin(){
    this.isAdmin = !this.isAdmin
    console.log("is admin : "+this.isAdmin)
  }
}
