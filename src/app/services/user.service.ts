import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[];
  url:string = "http://localhost:3000/users"
  constructor(private http:HttpClient) {
    this.http.get(this.url)
   }

   getAllUSers(){
    return this.http.get(this.url)
   }

  // ------------------CRUD starts-------------------

  addUsersFromSignup(user:User){
    this.http.post(this.url,user).subscribe((result)=>{
      console.log(result)
    })
  }
  addUser(name:string, gender:string, mobile:string, email:string, subtype:string, status:string, password:string){
    this.http.post(this.url,{name, gender, mobile, email, subtype, status, password}).subscribe((result)=>{
      console.log(result)
    })
  }

  editUser(data:User, id:number){
    var editUrl = `${this.url}?id=${id}`
    return this.http.put(editUrl, JSON.stringify(data))
  }

  deleteUser(user:User){
    var deleteUrl = `${this.url}/${user.id}`
    console.log("delete request on id is : "+user)
    return this.http.delete(deleteUrl)
  }

 
   // ------------------CRUD ends-------------------



   
   // ------------------FILTER starts-------------------
   getMaleUsers(){
    var maleUrl = `${this.url}?gender=male`
    return this.http.get(maleUrl)
  }
  getFemaleUsers(){
    var maleUrl = `${this.url}?gender=female`
    return this.http.get(maleUrl)
  }

  getActiveUsers(){
    var maleUrl = `${this.url}?status=active`
    return this.http.get(maleUrl)
  }

  getInActiveUsers(){
    var maleUrl = `${this.url}?status=inactive`
    return this.http.get(maleUrl)
  }

  getMonthlyUsers(){
    var maleUrl = `${this.url}?subtype=monthly`
    return this.http.get(maleUrl)
  }

  getYearlyUsers(){
    var maleUrl = `${this.url}?subtype=yearly`
    return this.http.get(maleUrl)
  }

  getByName(name:string){
   if (name !== ''){
    var maleUrl = `${this.url}?name=${name}`
    return this.http.get(maleUrl)
   }
   return this.getAllUSers()
  }
   // ------------------FILTER ends-------------------



   checkUserDetails(){
    return this.http.get(this.url)
  }

}
