import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  public showFiller;
  public lives
  public liveDataPresent=false
  public initial=true

  constructor(private services:ConfigService,
    public dataShare:DataServiceService,
    public router:Router
    ) { }

  ngOnInit(){
    this.showFiller = false;
    console.log("calling graphql query")
    setTimeout(()=>{
    this.services.graphqlQueryForLives().subscribe(data =>{
      console.log(data)
      if(data){
      this.lives=data['lives']['edges']
      this.liveDataPresent=true
      }
    })
  },2000);
    // console.log(this.services.liveDetails)
    // this.lives=this.services.liveDetails
    // console.log(this.lives)

  }

  getCelebrity( celebrity){
    console.log(celebrity)
    let obj={
      firstName:celebrity['firstName'],
      lastName:celebrity['lastName'],
      description:celebrity['description']
    }
    this.dataShare.setCelebrity(obj)
    this.initial=false
    // this.router.navigate(['celerityFeed'])

    

  }

  isDataPresent(event) {
    console.log("event emited")
  
this.initial = true;

  }

}
