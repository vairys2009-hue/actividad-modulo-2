import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio';
import { FormularioComponent } from './formulario/formulario';
import { Votos } from './votos/votos';
import { authGuard } from './guards/auth.guard';
import { MapaComponent } from './mapa/mapa';

const routes: Routes = [
{
  path: 'mapa',
  component: MapaComponent
},
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
  path: 'votos',
  component: Votos,
  canActivate: [authGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}