import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public celebrityDetails
  public fanId

  constructor() { }

  setCelebrity(details){
    this.celebrityDetails=details
  }
  getCelebrity(){
    return this.celebrityDetails
  }
  setFanId(fan){
    this.fanId=fan
  }
  getFanId(){
    return this.fanId
  }
}
