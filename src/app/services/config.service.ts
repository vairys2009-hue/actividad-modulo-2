import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  getApiUrl(): string {
    return this.config.apiUrl;
  }

  getNombreApp(): string {
    return this.config.nombreApp;
  }
}