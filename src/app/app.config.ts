import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from "@angular/common/http";
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withRouterConfig({
      paramsInheritanceStrategy: 'always'
    })),
    provideHttpClient()
  ]
};
