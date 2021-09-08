import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private jwtService: JwtService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.jwtService.getJwtUser().subscribe(tokens => {
            if (!request.reportProgress) {
                request = request.clone({
                    setHeaders: {
                      'Accept-Language':'en',
                        'Accept': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
            }

            // add auth header with jwt if user is logged in and request is to api url
            const isApiUrl = request.url.startsWith(environment.apiUrl);
            const isLoggedIn = tokens && tokens.token;
            if (isLoggedIn && isApiUrl) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${tokens?.token}`
                    }
                });
            }
        });

        return next.handle(request);
    }
}
