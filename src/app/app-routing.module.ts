import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { MappingComponent } from './mapping/mapping.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'mapping', component: MappingComponent},
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/user/user.module')
    .then((m) => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
