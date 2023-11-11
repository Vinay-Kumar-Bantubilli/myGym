import { coerceStringArray } from '@angular/cdk/coercion';
import { Component ,EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private us:UserService){

  }

  name:string;
  gender:string;
  mobile:string;
  mail:string;
  subtype:string;
  password:string;
  status:string;

  @Output() onSaveAndCanceClicked:EventEmitter<any> = new EventEmitter<any>();
  open:boolean;
  userDetails:User;
  count:number;
  SaveBtnClicked(){
   if (this.name){
      this.us.addUser(this.name, this.gender, this.mobile, this.mail, this.subtype, this.status, this.password)
      this.open = false;
      this.onSaveAndCanceClicked.emit()
      // console.log("save btn clicked")
   }
   this.clearForm()
  }
  cancelButtonClicked(){
    this.open = false;
    this.onSaveAndCanceClicked.emit()
    console.log(this.onSaveAndCanceClicked)
    this.clearForm()
  }
  

  clearForm(){
    this.name = "";
    this.gender = "";
    this.mobile = "";
    this.mail = "";
    this.subtype = "";
    this.status = "";
  }

}
