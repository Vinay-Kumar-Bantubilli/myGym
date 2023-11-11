import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  constructor(private http:HttpClient) { 

  }


  adminName:string = ''
  adminPassword:string = ''

  

  addAdminDetails(data:Admin){
    // console.log(data)
    this.http.post('http://localhost:3000/admin', data).subscribe((result)=>{
      console.log(result)
    })
  }

  checkAdminDetails(){
    return this.http.get('http://localhost:3000/admin')
  }


}
