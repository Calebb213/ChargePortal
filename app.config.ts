import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import player from 'lottie-web';
import { routes } from './app.routes';
import { provideLottieOptions } from 'ngx-lottie';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // provideToastr(),
    provideLottieOptions({
      player: () => player,
    }), provideAnimationsAsync(),
  ]
};
