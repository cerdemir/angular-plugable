import { Component, SkipSelf, Inject } from '@angular/core';
// import { DynamicDataShareServiceBase } from '../../../../main-app/src/app/services/DynamicDataShareServiceBase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'plugin-invoice';
  baseAddress = '';
  constructor(@Inject('DynamicDataShareService') private dynamicDataShareService: any) {
    this.baseAddress = this.dynamicDataShareService.getEnvironmentVariable('baseAddress');

  }
}
