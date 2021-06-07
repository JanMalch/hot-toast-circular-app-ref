import {ErrorHandler, Injectable} from '@angular/core';
import {HotToastService} from '@ngneat/hot-toast';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {

  constructor(private readonly toast: HotToastService) { }

  handleError(error: any): void {
    this.toast.error(error.message);
    console.error(error);
  }
}
