import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private as:AdminService, private router:Router){

  }

  adminDetails:any;
  adminName:string;
  ngOnInit(){

    var user = localStorage.getItem('isUserOrAdmin')
    this.adminName = localStorage.getItem("userName")
    this.adminDetails = localStorage.getItem('user')
    // this.adminName = this.adminDetails.name
    console.log("Details : "+this.adminDetails)

  }

  onLogoutBtnClicked(){
   if (confirm("Are you sure do you want logout...?")){
    localStorage.removeItem('userName')
    localStorage.removeItem('user')
    localStorage.removeItem('isUserOrAdmin')
    this.router.navigate(['/login'])
    alert('logout success')
   }
  }
}
