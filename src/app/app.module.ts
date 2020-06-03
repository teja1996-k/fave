import { ConfigService } from './services/config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaveBackgroundComponent } from './fave-background/fave-background.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SignupPromptComponent } from './signup-prompt/signup-prompt.component';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import {HttpClientModule, HttpHeaders, HttpParams, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApolloModule,Apollo,APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule,HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink,concat } from 'apollo-link';
import { KeycloakAngularModule} from 'keycloak-angular';
import { AppAuthGuard } from './app.authgaurd';
import { setContext } from 'apollo-link-context';
import Keycloak from 'keycloak-js';
import { WebSocketLink } from 'apollo-link-ws';
import { CelerityFeedComponent } from './celerity-feed/celerity-feed.component';

import { FaveComponent } from './fave/fave.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RegManuallyComponent } from './reg-manually/reg-manually.component';
// import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';
// import { AuthGuardService } from "./core/guard/auth-guard.service";
// import { KeycloakService } from "./core/auth/keycloak.service";
// import { concat } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    FaveBackgroundComponent,
    SignupPromptComponent,
    SignupComponent,
    RegisterComponent,
    LoginComponent,
    LogRegComponent,
    CompleteProfileComponent,
    SidenavComponent,
    LayoutHeaderComponent,
    CelerityFeedComponent,
    FaveComponent,
    ConfirmationDialogComponent,
    RegManuallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    KeycloakAngularModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  entryComponents: [SignupPromptComponent],
  providers: [ AppAuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {
  
  

 
  constructor(
    apollo:Apollo,
    httpLink:HttpLink,
    httpClient:HttpClient
    ){
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

      // httpClient
      // .post('https://identity-jx-staging.favedom-dev.softcannery.com/auth/realms/peeq/protocol/openid-connect/token', params, options)
      // .subscribe(response => {
      //     console.log(response)
      //     localStorage.setItem("ang-token",response['access_token'])
      //     localStorage.setItem("refresh",response['refresh_token'])
          const http = httpLink.create({ uri: "http://api.favedom-graphql-query-pr-5.favedom-dev.softcannery.com/query/graphql"});

          const authMiddleware = new ApolloLink((operation, forward) => {
            // add the authorization to the headers
            operation.setContext({
              headers: new HttpHeaders().set('Authorization',"bearer "+localStorage.getItem("ang-token"))
            });
        
            return forward(operation);
          });
      
              apollo.create({
            
              link:concat(authMiddleware, http),
              cache:new InMemoryCache(),
              queryDeduplication: true
            })
      // });
    //   var keycloak = Keycloak({
    //     url: 'http://keycloak-server/auth',
    //     realm: 'myrealm',
    //     clientId: 'myapp'
    // });
     
    //   const wsLink = new WebSocketLink({
    //   uri: 'ws://localhost:5000/',
    //   options: {
    //     reconnect: true,
    //     connectionParams: {
    //         Authorization: `Bearer ${keycloak.token}`
    //     }
    // }
    // })



 
     
    }
}
