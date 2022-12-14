import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodayComponent } from './today/today.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { LoginComponent } from './login/login.component';
import { HasRoleGuard } from './has-role.guard';

const routes: Routes = [
   //{ path: '', redirectTo: '/today', pathMatch: 'full' }, //Redundant because of wildcard route
   { path: 'login', component: LoginComponent },
   { path: 'today', component: TodayComponent, canActivate: [HasRoleGuard] },
   { path: 'weekly', component: WeeklyComponent, canActivate: [HasRoleGuard] },
   { path: 'monthly', component: MonthlyComponent, canActivate: [HasRoleGuard] },
   { path: '**', redirectTo: 'login' }, //The Angular router selects this route any time the requested URL doesn't match any router paths.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
