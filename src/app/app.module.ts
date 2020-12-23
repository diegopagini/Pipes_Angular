import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseñaPipe } from './pipes/contraseña.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizarPipe, DomseguroPipe, ContraseñaPipe],
  imports: [BrowserModule, AppRoutingModule],
  // providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
