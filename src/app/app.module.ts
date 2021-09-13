import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {AppComponent} from './app.component';
import {AuthWelcomeComponent} from './ui/auth/auth-welcome/auth-welcome.component';
import {AuthLoginComponent} from './ui/auth/auth-login/auth-login.component';
import {AuthRegisterComponent} from './ui/auth/auth-register/auth-register.component';
import {AuthComponent} from "./ui/auth/auth.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformComponent } from './ui/platform/platform.component';
import { PlatformNavComponent } from './ui/platform/platform-nav/platform-nav.component';
import {PlatformMainComponent} from "./ui/platform/platform-main/platform-main.component";
import { NewsComponent } from './ui/news/news.component';
import { NewsMainComponent } from './ui/news/news-main/news-main.component';
import { AccountComponent } from './ui/account/account.component';
import {AccountMainComponent} from "./ui/account/account-main/account-main.component";
import { TemplateNicheComponent } from './ui/templates/template-niche/template-niche.component';
import { CasesComponent } from './ui/cases/cases.component';
import { CasesMainComponent } from './ui/cases/cases-main/cases-main.component';
import { CasesCreateComponent } from './ui/cases/cases-create/cases-create.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpRequestInterceptor} from "./core/helpers/http.interceptor";
import {ErrorInterceptor} from "./core/helpers/error.interceptor";
import { AccountCasesComponent } from './ui/account/account-cases/account-cases.component';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';;

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthWelcomeComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    PlatformComponent,
    PlatformMainComponent,
    PlatformNavComponent,
    NewsComponent,
    NewsMainComponent,
    CasesComponent,
    CasesMainComponent,
    AccountComponent,
    AccountMainComponent,
    TemplateNicheComponent,
    CasesComponent,
    CasesMainComponent,
    CasesCreateComponent,
    AccountCasesComponent
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
