import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private ss:SubscriptionService){

  }
  subscribeBtnClicked(){
    this.ss.subscribe()
  }
  ngOnInit(){
    
  }
}
