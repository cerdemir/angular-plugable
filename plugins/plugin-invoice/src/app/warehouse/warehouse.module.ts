import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WarehouseComponent } from './warehouse.component';

@NgModule({
    declarations: [
        WarehouseComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [{
        provide: 'component',
        useValue: [{
            component: WarehouseComponent
        }],
        multi: true
    }],
    bootstrap: [WarehouseComponent]
})
export class WarehouseModule { }
