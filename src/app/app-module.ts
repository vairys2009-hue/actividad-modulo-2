import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { InicioComponent } from './inicio/inicio';
import { FormularioComponent } from './formulario/formulario';
import { Votos } from './votos/votos';
import { MapaComponent } from './mapa/mapa';

import { votosReducer } from './store/votos.reducer';

import { APP_CONFIG, APP_CONFIG_VALUE } from './config';
import { Notificador } from './services/notificador';
import { NotificadorConsolaService } from './services/notificador-consola.service';
import { NotificadorBaseService } from './services/notificador-base.service';
import { NotificadorDetalleService } from './services/notificador-detalle.service';

import { provideMapboxGL } from 'ngx-mapbox-gl';
import { TrackClick } from './directives/track-click';

@NgModule({
  declarations: [App, InicioComponent, FormularioComponent, Votos, TrackClick],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MapaComponent,

    StoreModule.forRoot({
      votos: votosReducer,
    }),
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),

    provideMapboxGL({
      accessToken: 'TU_TOKEN_DE_MAPBOX',
    }),

    {
      provide: APP_CONFIG,
      useValue: APP_CONFIG_VALUE,
    },

    {
      provide: Notificador,
      useClass: NotificadorConsolaService,
    },

    NotificadorDetalleService,

    {
      provide: NotificadorBaseService,
      useExisting: NotificadorDetalleService,
    },
  ],

  bootstrap: [App],
})
export class AppModule {}
