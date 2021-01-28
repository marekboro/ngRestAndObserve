import {NgModule} from "@angular/core"
import {Routes, RouterModule } from "@angular/router"

import {HomeComponent } from "./home.component"
import {NotFoundComponent } from "./notfound.component"
import {GitHubComponent } from "./github.component"
import {TesterComponent} from './another.component'
import { GitHubUserComponent } from './githubuser.component'

import {LoginComponent} from './login.component'
import {AuthGuard} from './auth-guard.service'

export const routing = RouterModule.forRoot([
    {path:'', component: HomeComponent},
    {path:'GitHub', component: GitHubComponent, canActivate:[AuthGuard]},
    {path:'Tester', component: TesterComponent, canActivate:[AuthGuard]},
    {path:'Tester/user/:login/:score', component: GitHubUserComponent, canActivate:[AuthGuard]},
    {path:'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate:[AuthGuard]},
    {path:'login', component: LoginComponent},
    {path:'logout', component: LoginComponent},
    {path:'**', component: NotFoundComponent}
])