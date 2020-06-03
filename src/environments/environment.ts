// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4000',
  production: false,
  keycloakBaseUrl: 'http://192.168.1.101:8080/',
  apiUrl: 'https://identity-jx-staging.favedom-dev.softcannery.com/auth', keycloakRealm: 'peeq', keycloakClient: 'peeq-query'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
