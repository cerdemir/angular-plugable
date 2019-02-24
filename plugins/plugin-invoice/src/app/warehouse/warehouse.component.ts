import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  title = 'plugin-invoice';
  baseAddress = '';
  constructor(@Inject('DynamicDataShareService') private dynamicDataShareService: any) {
    this.baseAddress = this.dynamicDataShareService.getEnvironmentVariable('baseAddress');

  }
  ngOnInit() { }
}
