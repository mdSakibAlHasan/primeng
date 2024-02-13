import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { DragComponent } from './drag/drag.component';

const componentParsers: Array<HookParserEntry> = [
  {component: DragComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()),importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(DynamicHooksModule.forRoot({globalParsers: componentParsers}) )
  ]
};
