import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import * as jwt_decode from 'jwt-decode';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public fanId:any
  public token
  public refirstName
  public relastName
  public reEmail
  public loginDoesNotExit=false
 

  constructor(public http:HttpClient,public router:Router,public services:ConfigService,public dataShare:DataServiceService) { }

  ngOnInit(): void {
  }
  confirmUser(id,valid){
    this.loginDoesNotExit=false
    if(valid){
      const params = new HttpParams({
        fromObject: {
          grant_type: 'password',
          username: "kazatejaswini92@gmail.com",
          password: "greenland#1",
          client_id: "peeq-query"
        }
      });

      let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };

      this.http
      .post('https://identity-jx-staging.favedom-dev.softcannery.com/auth/realms/peeq/protocol/openid-connect/token', params, options)
      .subscribe(response => {
          console.log(response)
      
            localStorage.setItem("ang-token",response['access_token'])
            // this.token=localStorage.getItem("ang-token")
            var decoded = jwt_decode(response['access_token']); 
            console.log(decoded);
            let obj={
              firstName:decoded['given_name'],
              lastName:decoded['family_name'],
              email:decoded['email']
            }
            // debugger
            console.log("calling graphql query")
            setTimeout(()=>{
            this.services.graphqlQueryForFanId(obj).subscribe(data =>{
              console.log(data)
              if(data){
              this.fanId=data['fans']['edges']
              console.log(this.fanId)
              this.dataShare.setFanId(this.fanId['0']['node']['id'])
              if(this.fanId.length==0){
                this.loginDoesNotExit=true
              }else{
                this.router.navigate(['sidenav'])
              }
              }
            })
          },2000);
      },
      (error)=>{
        this.loginDoesNotExit=true

      })
      

    }

  }

}
