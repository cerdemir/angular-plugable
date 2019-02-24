import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataShareService {
  constructor() { }

  getEnvironmentVariable(name: string) {
    return environment[name];
  }
}
