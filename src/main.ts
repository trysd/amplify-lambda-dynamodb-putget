import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api';
import Storage from '@aws-amplify/storage';
import AWSConfig from './aws-exports';

Amplify.configure(AWSConfig);
Auth.configure(AWSConfig);
API.configure(AWSConfig);
Storage.configure(AWSConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
