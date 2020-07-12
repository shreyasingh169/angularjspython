import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import Amplify from 'aws-amplify';

import Amplify from '@aws-amplify/core';
import awsmobile from './aws-exports';
// import { Auth } from '@aws-amplify/auth';
// awsmobile.Auth = {
//   awsmobile.Auth,
//   storage: window.sessionStorage
// };

Amplify.configure(awsmobile);

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  console.log(environment.production);
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
