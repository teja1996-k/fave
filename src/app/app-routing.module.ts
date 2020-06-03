import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { FaveBackgroundComponent } from './fave-background/fave-background.component';
import { LoginComponent } from './login/login.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppAuthGuard } from './app.authgaurd';
import { CelerityFeedComponent } from './celerity-feed/celerity-feed.component';
import { FaveComponent } from './fave/fave.component';
import { RegManuallyComponent } from './reg-manually/reg-manually.component';


const routes: Routes = [
  {
    path: '',
    component:SidenavComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AppAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: LogRegComponent
  },
  {
    path: "userInfo",
    component: CompleteProfileComponent
  },
  {
    path:"sidenav",
    component:SidenavComponent
  },
  {
    path:"celerityFeed",
    component:CelerityFeedComponent
  },
  {
    path: "fave",
    component: FaveComponent
  },
  {
    path: "regManual",
    component:RegManuallyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
