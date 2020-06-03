import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-celerity-feed',
  templateUrl: './celerity-feed.component.html',
  styleUrls: ['./celerity-feed.component.scss']
})
export class CelerityFeedComponent implements OnInit {
  public celebrity
  public celebrityPresent
  @Output() child1EventEmitter= new EventEmitter<boolean>();
  // @Output() showEvent = new EventEmitter<boolean>();



  constructor(private services:ConfigService,private dataShare:DataServiceService) { }

  ngOnInit(): void {
    let celebrity = this.dataShare.getCelebrity()
    setTimeout(()=>{
      this.services.graphqlQueryForCelebrity(celebrity).subscribe(data =>{
        console.log(data)
        if(data){
          
        this.celebrity=data['celebrities']['edges']
        this.celebrityPresent=true
        console.log(this.celebrity)
        }
      })
    },2000);
    
  }
  back(){
    this.child1EventEmitter.emit(true)

  }

}
