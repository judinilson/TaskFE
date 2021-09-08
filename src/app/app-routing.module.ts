import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/helpers/auth.guard";
import {AuthComponent} from "./ui/auth/auth.component";
import {Role} from "./core/models/enums";
import {AuthLoginComponent} from "./ui/auth/auth-login/auth-login.component";
import {AuthWelcomeComponent} from "./ui/auth/auth-welcome/auth-welcome.component";
import {PageNotFoundComponent} from "./ui/page-not-found/page-not-found.component";
import {AuthRegisterComponent} from "./ui/auth/auth-register/auth-register.component";
import {PlatformComponent} from "./ui/platform/platform.component";
import {PlatformMainComponent} from "./ui/platform/platform-main/platform-main.component";
import {NewsComponent} from "./ui/news/news.component";
import {NewsMainComponent} from "./ui/news/news-main/news-main.component";
import {AccountComponent} from "./ui/account/account.component";
import {AccountMainComponent} from "./ui/account/account-main/account-main.component";
import {CasesComponent} from "./ui/cases/cases.component";
import {CasesMainComponent} from "./ui/cases/cases-main/cases-main.component";

const routes: Routes = [
  { path: '', redirectTo: "auth", pathMatch: 'full' },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'login', component: AuthLoginComponent },
      { path: 'welcome', component: AuthWelcomeComponent },
      { path: 'register', component: AuthRegisterComponent },
    ]
  },

  {
    path: 'platform', component: PlatformComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: PlatformMainComponent },
      { path: 'main', component: PlatformMainComponent },
    ],
    canActivate: [AuthGuard],
    data: {
      roles: [Role.admin, Role.user]
    }
  },

  {
    path: 'account', component: AccountComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full', },
      { path: 'main', component: AccountMainComponent, },
    ],
    canActivate: [AuthGuard],
    data: {
      roles: [Role.admin, Role.user]
    }
  },

  {
    path: 'news', component: NewsComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full', },
      { path: 'main', component: NewsMainComponent, },
    ],
    canActivate: [AuthGuard],
    data: {
      roles: [Role.admin, Role.user]
    }
  },

  {
    path: 'case', component: CasesComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full', },
      { path: 'main', component: CasesMainComponent, },
    ],
    canActivate: [AuthGuard],
    data: {
      roles: [Role.admin, Role.user]
    }
  },

  { path: '*', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
