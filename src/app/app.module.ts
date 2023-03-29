import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RifaComponent } from './rifa/rifa.component';
import { SwiperModule } from 'swiper/angular';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BoletosComponent } from './boletos/boletos.component';
import { CuentasComponent } from './cuentas/cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    RifaComponent,
    LoginComponent,
    AboutComponent,
    BoletosComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
