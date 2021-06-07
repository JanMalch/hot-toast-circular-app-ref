import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppErrorHandlerService} from './app-error-handler.service';

import { AppComponent } from './app.component';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HotToastModule.forRoot()
  ],
  providers: [
    {
      provide: ErrorHandler, useClass: AppErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
