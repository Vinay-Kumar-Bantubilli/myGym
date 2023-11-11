import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  dataSource:User[];
  constructor(private us:UserService){
    this.fetchData()
    console.table(this.dataSource)
  }
  displayedColumns: string[] = [ 'id', 'name', 'gender', 'mobile', 'email', 'subtype', 'status', 'modify'];
  ngOnInit(){
    this.fetchData()
  }

  filterValue:string = "all"
  fetchData(){

    if (this.filterValue === 'all'){
      this.us.getAllUSers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }

    else if(this.filterValue == 'male'){
      this.us.getMaleUsers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }

    else if(this.filterValue == 'female'){
      this.us.getFemaleUsers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }

    else if(this.filterValue == 'yearly'){
      this.us.getYearlyUsers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }

    else if(this.filterValue == 'monthly'){
      this.us.getMonthlyUsers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }

    else if(this.filterValue == 'active'){
      this.us.getActiveUsers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }

    else if(this.filterValue == 'inactive'){
      this.us.getInActiveUsers().subscribe((data:User[])=>{
        this.dataSource = data
        // console.log(data)
      })
    }
  }

  deleteBtnClicked(user:User){
    this.filterValue = "all"
    this.us.deleteUser(user).subscribe((result)=>{
      console.log(result)
    })
    this.fetchData()
  }


  searchFilterValue:string = ""
  onSearchBtnClicked(){
    if (this.searchFilterValue){
      console.log(this.searchFilterValue)
      this.us.getByName(this.searchFilterValue).subscribe((data:User[])=>{
        this.dataSource = data
        console.log(data)
      })
    }
    else{
        this.us.getAllUSers().subscribe((data:User[])=>{
        this.dataSource = data
      })
    }
  }



  open:boolean = false
  openUserForm(){
    this.open = !this.open
    console.log(this.open)
    this.fetchData()
  }

  cancelButtonClicked(){
    this.open = false;
    // this.onSaveAndCanceClicked.emit("false")
    // console.log(this.onSaveAndCanceClicked)
    // this.clearForm()
  }

  isEditing:boolean = false
  data:User;
  onEditBtnClicked(row:User){
    this.isEditing = !this.isEditing;
    this.data = row;
    console.log(row)
  }
  
}
