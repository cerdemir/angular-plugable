# Angular 7 ile ornek plugin yapisi

## api
Menu iceriklerini statik olarak sunar.

Calistirmak icin
```
cd api 
dotnet run
```
## plugins/plugin-invoice
> bu bundle icinde iki adet plugin var.

Derlendiginde ([rollup](https://rollupjs.org)) bundle dosyasi `main-app/src/assets/plugins` altina kopyalanir. 
Pluginler bazi kurallara uymak zorunda.
* Baslangic noktasi olan `main.ts` den bir modul export edilmesi gerekiyor.
* Bu modul bir [ValueProvider](https://angular.io/api/core/ValueProvider#description) ile hangi componentin `main-app` icinde yuklenecegini belirtmesi gerekiyor.
* Servis injection icin elit bir yol bulamadim. Enjekte ettigimiz servisler `any` :( olarak kullanilabiliyor.

Derlemek icin
```
cd plugins/plugin-invoice
npm install
npm run build:rollup
```
## plugins/plugin-stock

Ikinci bir ornek bundle olarak eklenmistir. `plugin-invoice` projesi ile neredeyse ayni. 

Derlemek icin
```
cd plugins/plugin-stock
npm install
npm run build:rollup
```

## main-app
Pluginleri dinamik olarak listeleyip yukleyerek calistiran uygulama.
Pluginleri yuklemek icin [SystemJS](https://github.com/systemjs/systemjs) kullanir.

`dynamic-navigation.component` Menude pluginleri listeler

`dynamic-content.component` Menuden secilen plugin icerigini gosterir

`dynamic-menu.service` navigation ve content bilesenleri arasindaki baglantiyi ve apiden menu listesini alir.

`dynamic-data-share.service` Plugin icine servis enjekte etmeyi test ettigim servis. Environment degiskenlerine plugin icerisinden ulasilmasini sagliyor.

Calistirmak icin
```
cd main-app
npm install
ng serve
```



