import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CompleteProfileComponent implements OnInit {
  public token
  public refirstName
  public relastName
  public reEmail
  public rephonenumber
  private fanId
  private registerFanId
  public  userAlreadyExists


  constructor(
    private activatedRoute: ActivatedRoute,
    private services:ConfigService,
    private router:Router,
    private dataShare:DataServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      var userId = params['state'];
      // if(userId=="abcd"){
        setTimeout(()=>{
        this.token=localStorage.getItem("ang-token")
        var decoded = jwt_decode(this.token); 
        console.log(decoded);
        this.refirstName=decoded['given_name']
        this.relastName=decoded['family_name']
        this.reEmail=decoded['email']
        },2000);
      // }
    });

    

  }
  confirmUser(userForm,valid){
    if(valid){
      let userDetails=userForm.value
      let checkfanIdExist={
        firstName:userDetails['firstName'],
        lastName:userDetails['lastName'],
        email:userDetails['email']
      }
      let createNewFanId={
        firstName:userDetails['firstName'],
        lastName:userDetails['lastName'],
        email:userDetails['email'],
        phone:userDetails['phonenumber']

      }
      console.log("calling graphql query")
      setTimeout(()=>{
      this.services.graphqlQueryForFanId(checkfanIdExist).subscribe(data =>{
        console.log(data)
        if(data){
        this.fanId=data['fans']['edges']
        console.log(this.fanId)
        if(this.fanId.length==0){
          this.services.graphqlQueryForCreateFan(createNewFanId).subscribe(createFan =>{
            console.log(createFan)
            if(createFan){
              this.registerFanId=createFan['createFan']['id']
              this.dataShare.setFanId(this.registerFanId)
              this.router.navigate(['sidenav'])

              


            }
          })
          
        }else{
          this.dataShare.setFanId(this.fanId['0']['node']['id'])
          this.userAlreadyExists=true
        }
        }
      })
    },1000);



    }
  }

}
