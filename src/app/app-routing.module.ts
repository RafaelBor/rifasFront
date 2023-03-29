import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BoletosComponent } from './boletos/boletos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { LoginComponent } from './login/login.component';
import { RifaComponent } from './rifa/rifa.component';

const routes: Routes = [
  {
    path: 'rifa',
    component: RifaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'quienes-somos',
    component: AboutComponent
  },
  {
    path: 'boletos',
    component: BoletosComponent
  },
  {
    path: 'cuentas',
    component: CuentasComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
