  angular.module('fractlIndex', ['ngMaterial', 'ngRoute']);

// Theming for Angular Material
  angular.module('fractlIndex').config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#575e86',
        '100': '#4d5377',
        '200': '#434967',
        '300': '#393e58',
        '400': '#2f3348',
        '500': '#252839',
        '600': '#1b1d2a',
        '700': '#11121a',
        '800': '#07070b',
        '900': '#000000',
        'A100': '#616996',
        'A200': '#6f77a2',
        'A400': '#7e85ac',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#835c08',
        '100': '#9b6d0a',
        '200': '#b37e0b',
        '300': '#cb8f0d',
        '400': '#e3a00e',
        '500': '#f0ad1a',
        '600': '#f4bf4a',
        '700': '#f5c762',
        '800': '#f7d07a',
        '900': '#f8d892',
        'A100': '#f4bf4a',
        'A200': '#f2b632',
        'A400': '#f0ad1a',
        'A700': '#fae1aa'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#a9afb5',
        '100': '#9ba3a9',
        '200': '#8e969d',
        '300': '#808a91',
        '400': '#737d85',
        '500': '#677077',
        '600': '#5b6369',
        '700': '#4f565c',
        '800': '#43494e',
        '900': '#383d40',
        'A100': '#b7bcc0',
        'A200': '#c4c9cc',
        'A400': '#d2d5d8',
        'A700': '#2c3033'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#f6f6f6',
        '100': '#e9e9e9',
        '200': '#dcdcdd',
        '300': '#cfcfd0',
        '400': '#c2c2c4',
        '500': '#b5b5b7',
        '600': '#a8a8aa',
        '700': '#9b9b9e',
        '800': '#8e8e91',
        '900': '#818185',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#757578'
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
