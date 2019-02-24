import { Component, OnInit } from '@angular/core';
import { DynamicMenuService } from '../../services/dynamic-menu.service';
import DynamicMenuItem from '../../models/DymanicMenuItem';

@Component({
  selector: 'app-dynamic-navigation',
  templateUrl: './dynamic-navigation.component.html',
  styleUrls: ['./dynamic-navigation.component.css']
})
export class DynamicNavigationComponent implements OnInit {
  DynamicMenuItems: DynamicMenuItem[];

  constructor(private dynamicMenuService: DynamicMenuService) { }

  ngOnInit() {
    this.getMenuItemList();
  }
  async getMenuItemList() {
    this.DynamicMenuItems = await this.dynamicMenuService.getDynamicMenuItems();
  }
  loadMenuItem(item: DynamicMenuItem) {
    this.dynamicMenuService.loadMenuItemPlugin(item);
  }

}
