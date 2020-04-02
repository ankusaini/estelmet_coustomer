import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest, HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JwtService } from 'src/app/shared/services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor {

  constructor(private jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtService.getToken();
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    console.log(token);

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }

}
