import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  // router: any;
  constructor(private route:ActivatedRoute, public router: Router,public http:HttpClient) {}
  currentRout: string;
  localHost;
  url:string="https://identity-jx-staging.favedom-dev.softcannery.com/auth/realms/peeq/protocol/openid-connect/auth?client_id=peeq-query&state=abcd&redirect_uri="
  googleUrl="&scope=openid&response_type=code&kc_idp_hint=google"
  // googleUrl
  facebookUrl="&scope=openid&response_type=code&kc_idp_hint=facebook"


ngOnInit() {
  // this.http.post("https://identity-jx-staging.favedom-dev.softcannery.com/peeq/logout-all")


this.currentRout = window.location.origin;
console.log(this.currentRout);
this.localHost=this.currentRout+"/userInfo"
console.log(this.localHost)
this.googleUrl=this.url+this.localHost+this.googleUrl
console.log(this.googleUrl)
this.facebookUrl=this.url+ this.localHost+this.facebookUrl



}
submit(){
  this.router.navigate(['regManual'])
}

}
