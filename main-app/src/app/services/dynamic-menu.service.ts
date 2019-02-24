import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import DynamicMenuItem from '../models/DymanicMenuItem';
// https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
@Injectable({
  providedIn: 'root'
})
export class DynamicMenuService {

  private dynamicMenuItemSubject = new BehaviorSubject<DynamicMenuItem>(null);
  currentDynamicMenuItem = this.dynamicMenuItemSubject.asObservable();

  constructor(private http: HttpClient) { }

  async getDynamicMenuItems(): Promise<DynamicMenuItem[]> {
    const url = `${environment.baseAddress}/Menu`;
    return this.http.get<DynamicMenuItem[]>(url).toPromise();
  }

  loadMenuItemPlugin(menuItem: DynamicMenuItem) {
    this.dynamicMenuItemSubject.next(menuItem);
  }
}
