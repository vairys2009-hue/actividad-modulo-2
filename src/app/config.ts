import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  nombreApp: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const APP_CONFIG_VALUE: AppConfig = {
  apiUrl: 'http://localhost:3000/api',
  nombreApp: 'Mi Aplicación de Bicicletas'
};