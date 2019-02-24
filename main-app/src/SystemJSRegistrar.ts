import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
// systemjs 0.21.0 kullanildi. Sebebi => https://stackoverflow.com/a/53702437/5743841
declare const SystemJS;
export default function registerAngular2SystemJS() {
    SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
}
