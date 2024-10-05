import { LoaderService } from './loader.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';

@Injectable()
export class authCheckInterceptor implements HttpInterceptor {
  constructor(private loaderService:LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("started API call");
    this.loaderService.show();

    return next.handle(request).pipe(
      finalize(() => {
        // console.log("ended api call");
        this.loaderService.hide();
      }),
      map(data=>{
        return data;
      }),
      catchError((error:HttpErrorResponse)=>{
        let errorMes = '';
        // console.log("error", error.message);
        alert("this is api error"+" "+error.status)
        return throwError(error.message)

      })
  );
  }
}
