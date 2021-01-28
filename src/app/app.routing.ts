import {NgModule} from "@angular/core"
import {Routes, RouterModule } from "@angular/router"

import {HomeComponent } from "./home.component"
import {NotFoundComponent } from "./notfound.component"
import {GitHubComponent } from "./github.component"
import {TesterComponent} from './another.component'

export const routing = RouterModule.forRoot([
    {path:'', component: HomeComponent},
    {path:'GitHub', component: GitHubComponent},
    {path:'Tester', component: TesterComponent},
    {path:'**', component: NotFoundComponent}
])