import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Keycloak from 'keycloak-js'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
//keycloak init options
// let initOptions = {
//   url: 'https://identity-jx-staging.favedom-dev.softcannery.com/auth', realm: 'peeq', clientId: 'peeq-query'
// }

// let keycloak = Keycloak(initOptions);

// keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false }).success((auth) => {

//   if (!auth) {
//     window.location.reload();
//     alert("not authenticated")
//   } else {
//     console.log("Authenticated");
//   }

//   //bootstrap after authentication is successful.
  


//   localStorage.setItem("ang-token", keycloak.token);
//   localStorage.setItem("ang-refresh-token", keycloak.refreshToken);

//   setTimeout(() => {
//     keycloak.updateToken(70).success((refreshed) => {
//       if (refreshed) {
//         console.debug('Token refreshed' + refreshed);
//       } else {
//         console.warn('Token not refreshed, valid for '
//           + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//       }
//     }).error(() => {
//       console.error('Failed to refresh token');
//     });


//   }, 60000)

// }).error(() => {
//   console.error("Authenticated Failed");
// });



