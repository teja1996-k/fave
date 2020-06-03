import { Component, OnInit } from '@angular/core';
import * as Keycloak from 'keycloak-js'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fave-peeq';
  constructor(public router : Router) {
    
  }
  ngOnInit(){
    let initOptions = {
      url: 'https://identity-jx-staging.favedom-dev.softcannery.com/auth', realm: 'peeq', clientId: 'peeq-query'
    }
    
    let keycloak = Keycloak(initOptions);
    
    keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false }).success((auth) => {
    
      if (!auth) {
        // alert("not authenticated")
        this.router.navigate(['user'])
      } 
    
    
      localStorage.setItem("ang-token", keycloak.token);
      localStorage.setItem("ang-refresh-token", keycloak.refreshToken);
    
      setTimeout(() => {
        keycloak.updateToken(70).success((refreshed) => {
          if (refreshed) {
            console.debug('Token refreshed' + refreshed);
          } else {
            console.warn('Token not refreshed, valid for '
              + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
          }
        }).error(() => {
          console.error('Failed to refresh token');
        });
    
    
      }, 60000)
    
    }).error(() => {
      console.error("Authenticated Failed");
    });
    
    
    
    

  }
}
