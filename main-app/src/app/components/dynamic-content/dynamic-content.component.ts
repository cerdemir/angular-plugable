import { Component, Compiler, OnInit, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicMenuService } from 'src/app/services/dynamic-menu.service';
import DynamicMenuItem from '../../models/DymanicMenuItem';
import { environment } from 'src/environments/environment';
import { DynamicDataShareService } from 'src/app/services/dynamic-data-share.service';

declare const SystemJS;
@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})

export class DynamicContentComponent implements OnInit {

  private pluginComponent: any;

  currentMenuItem: DynamicMenuItem;
  @ViewChild('dynamicContent', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(
    private dynamicMenuService: DynamicMenuService,
    private dynamicDataShareService: DynamicDataShareService,
    private compiler: Compiler,
    private injector: Injector) { }

  ngOnInit() {
    this.dynamicMenuService.currentDynamicMenuItem.subscribe(item => {
      this.currentMenuItem = item;
      if (item != null) {
        this.destroyCurrentPlugin();
        this.loadPlugin();
      }
    });
  }
  private destroyCurrentPlugin() {
    if (this.pluginComponent != null) {
      this.pluginComponent.destroy();
    }
  }

  private async loadPlugin() {

    const module = await SystemJS.import(`${environment.pluginPath}/${this.currentMenuItem.pluginFilename}`);

    // https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
    // https://angular.io/api/core/Compiler#!#compileModuleAsync-anchor
    const moduleFactory = await this.compiler.compileModuleAsync<any>(module[this.currentMenuItem.pluginIdentifier]);
    const moduleRef = moduleFactory.create(this.injector);
    const componentProvider = moduleRef.injector.get('component');

    // https://angular.io/guide/dependency-injection-providers
    // https://angular.io/api/core/ValueProvider
    const targetComponent = componentProvider[0][0].component;

    const componentFactory = moduleRef.componentFactoryResolver
      .resolveComponentFactory<any>(
        targetComponent
      );

    // https://stackoverflow.com/questions/51730153/angular-6-viewcontainerref-createcomponent-with-custom-provider
    const customInjector = Injector.create({
      providers: [{ provide: 'DynamicDataShareService', useValue: this.dynamicDataShareService }],
      parent: this.injector
    });

    this.pluginComponent = this.content.createComponent(componentFactory, null, customInjector);
  }
}
