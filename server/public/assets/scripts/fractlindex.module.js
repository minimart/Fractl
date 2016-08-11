angular.module('fractlIndex').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl:'views/home.html',
      controller: 'homeController',
      access: {restricted: false}
    })
    .when('/newEntry', {
      templateUrl:'views/entry_views/newentry.html',
      controller: 'newEntryController',
      access: {restricted: true}
    })
    .when('/newEntry/any-urges', {
      templateUrl: 'views/entry_views/any-urges.html',
      controller: 'anyUrgesController',
      access: {restricted: true}
    })
    .when('/newEntry/emotions', {
      templateUrl: 'views/entry_views/emotions.html',
      controller: 'emotionsController',
      access: {restricted: true}
    })
    .when('/newEntry/drugs', {
      templateUrl: 'views/entry_views/drugs.html',
      controller: 'drugsController',
      access: {restricted: true}
    })
    .when('/newEntry/dbt-skills', {
      templateUrl: 'views/entry_views/dbt-skills.html',
      controller: 'dbtSkillsController',
      access: {restricted: true}
    })
    .when('/newEntry/journaling', {
      templateUrl: 'views/entry_views/journaling.html',
      controller: 'journalingController',
      access: {restricted: true}
    })
    .when('/newEntry/review-and-submit', {
      templateUrl: 'views/entry_views/review-and-submit.html',
      controller: 'reviewController',
      access: {restricted: true}
    })
    .when('/pastentries', {
      templateUrl: 'views/pastentries.html',
      controller: 'pastEntriesController',
      access: {restricted: true}
    })
    .when('/charts', {
      templateUrl: 'views/charts.html',
      controller: 'chartsController',
      access: {restricted: true}
    })
    .when('/emergency', {
      templateUrl: 'views/emergency.html',
      controller: 'emergencyController',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/failure', {
      templateUrl: 'views/loginfailure.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/success', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
      access: {restricted: true}
    })
$locationProvider.html5Mode(true);
});
