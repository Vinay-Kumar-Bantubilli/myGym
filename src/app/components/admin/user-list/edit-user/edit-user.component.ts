import { Component ,EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  @Input() id:number;
  name:string;
  gender:string;
  mobile:string;
  mail:string;
  subtype:string;
  password:string;
  status:string;
  cpassword:string;

  @Input() data:User;

  constructor(private us:UserService){
  }

  ngOnInit(){
    console.log("consrutcor : "+this.data.id)
    this.name = this.data.name;
    this.gender = this.data.gender;
    this.mobile = this.data.mobile;
    this.mail = this.data.mail;
    this.status = this.data.status;
    this.subtype = this.data.subtype;
    this.password = this.data.password;
    this.cpassword = this.data.password;
  }

  @Output() onSaveAndCanceClickedinEdit:EventEmitter<any> = new EventEmitter<any>();
  open:boolean;
  userDetails:User;
  count:number;
  SaveBtnClicked(user:any){
    this.userDetails = user.value
    console.log(this.userDetails)
   if (user.valid){
      this.us.editUser(user.value, this.data.id).subscribe(data=>{
        console.log("data : "+data)
      })
      this.open = false;
      this.onSaveAndCanceClickedinEdit.emit()
   }
   this.clearForm()
   this.cancelButtonClicked()
  }


  cancelButtonClicked(){
    this.open = false;
    this.onSaveAndCanceClickedinEdit.emit()
    // console.log(this.onSaveAndCanceClickedinEdit)
    this.clearForm()
  }
  

  clearForm(){
    this.name = "";
    this.gender = "";
    this.mobile = "";
    this.mail = "";
    this.subtype = "";
    this.status = "";
    this.password = "";
    this.cpassword = "";
  }
}
