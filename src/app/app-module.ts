import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { InicioComponent } from './inicio/inicio';
import { FormularioComponent } from './formulario/formulario';
import { Votos } from './votos/votos';
import { votosReducer } from './store/votos.reducer';

@NgModule({
  declarations: [
    App,
    InicioComponent,
    FormularioComponent,
    Votos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      votos: votosReducer
    })
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}