import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';   
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes: Routes = [
    
    { path: '', redirectTo: 'FirstPage', pathMatch: 'full' },
    { path: 'FirstPage', component: FirstPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent }


];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }