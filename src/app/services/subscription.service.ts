import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  subscribe(){
    alert("Your subscription added...! \nStart Using and Enjoy......         : )")
  }
}
