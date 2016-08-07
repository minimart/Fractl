  angular.module('fractlIndex', ['ngMaterial', 'ngRoute', 'angularMoment']);

// Theming for Angular Material
  angular.module('fractlIndex').config(function ($mdThemingProvider) {
    var customPrimary = {
       '50': '#988bc2',
       '100': '#897bb9',
       '200': '#7a6ab1',
       '300': '#6c59a8',
       '400': '#615098',
       '500': '564787',
       '600': '#4b3e76',
       '700': '#413566',
       '800': '#362d55',
       '900': '#2b2444',
       'A100': '#a79ccb',
       'A200': '#b6add4',
       'A400': '#c5bddd',
       'A700': '#211b33'
   };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#72460a',
        '100': '#89550c',
        '200': '#a1630e',
        '300': '#b87210',
        '400': '#d08012',
        '500': '#e78e15',
        '600': '#eea540',
        '700': '#f0b058',
        '800': '#f2bb6f',
        '900': '#f4c687',
        'A100': '#eea540',
        'A200': '#EC9A29',
        'A400': '#e78e15',
        'A700': '#f6d19e'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#e6625c',
        '100': '#e24c46',
        '200': '#df3730',
        '300': '#d42821',
        '400': '#be241d',
        '500': '#A8201A',
        '600': '#921c17',
        '700': '#7c1813',
        '800': '#661310',
        '900': '#500f0c',
        'A100': '#e97772',
        'A200': '#ed8c88',
        'A400': '#f0a19e',
        'A700': '#3a0b09'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#FBF5F3',
        '600': '#f5e5e0',
        '700': '#eed5cd',
        '800': '#e8c5ba',
        '900': '#e1b5a6',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#dba593'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
       });
