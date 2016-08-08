angular.module('fractlIndex').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl:'views/homepage.html',
      controller: 'homeController'
    })
    .when('/newEntry', {
      templateUrl:'views/entry_views/newentry.html',
      controller: 'newEntryController'
    })
    .when('/newEntry/any-urges', {
      templateUrl: 'views/entry_views/any-urges.html',
      controller: 'anyUrgesController'
    })
    .when('/newEntry/emotions', {
      templateUrl: 'views/entry_views/emotions.html',
      controller: 'emotionsController'
    })
    .when('/newEntry/drugs', {
      templateUrl: 'views/entry_views/drugs.html',
      controller: 'drugsController'
    })
    .when('/newEntry/dbt-skills', {
      templateUrl: 'views/entry_views/dbt-skills.html',
      controller: 'dbtSkillsController'
    })
    .when('/newEntry/journaling', {
      templateUrl: 'views/entry_views/journaling.html',
      controller: 'journalingController'
    })
    .when('/newEntry/review-and-submit', {
      templateUrl: 'views/entry_views/review-and-submit.html',
      controller: 'reviewController'
    })
    .when('/pastentries', {
      templateUrl: 'views/pastentries.html',
      controller: 'pastEntriesController'
    })
    .when('/charts', {
      templateUrl: 'views/charts.html',
      controller: 'chartsController'
    })
    .when('/emergency', {
      templateUrl: 'views/emergency.html',
      controller: 'emergencyController'
    })
$locationProvider.html5Mode(true);
});
