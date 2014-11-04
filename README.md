play angular material
=========

### 初期構築

fullstackベース(Bootstrapを使わない)にAngular-materialを追加

```
yo angular-fullstack

bower i angular-material
```

バージョンは1.3で

```
Unable to find a suitable version for angular, please choose one:
    1) angular#1.3.0 which resolved to 1.3.0 and is required by angular-animate#1.3.0, angular-aria#1.3.0, angular-material#0.5.1 
    2) angular#>=1.2.* which resolved to 1.3.1 and is required by play-ng-material 
    3) angular#>= 1.0.8 which resolved to 1.3.1 and is required by angular-ui-router#0.2.11 
    4) angular#1.3.1 which resolved to 1.3.1 and is required by angular-resource#1.3.1Prefix the choice with ! to persist it to bower.json

? Answer:: 1

```

読み込みモジュールに`ngMaterial`を追加

```
angular.module('playNgMaterialApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial'
])
...
```
