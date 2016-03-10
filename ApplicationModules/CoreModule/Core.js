(function() {

var PracticeApp = angular.module("PracticeApp", ['ngRoute']);

PracticeApp.config(function ($routeProvider) {

    $routeProvider
        .when('/',
            {
                controller: 'IndexController',
                templateUrl: '/app/views/index.html'
            })
        .when('/HomePage',
            {
                controller: 'HomeController',
                templateUrl: '/app/views/HomePage.html'
            })
        .when('/SettingsPage',
            {
                controller: 'SettingsController',
                templateUrl: '/app/views/SettingsPage.html'
            })
        .when('/SearchPage',
            {
                controller: 'SearchController',
                templateUrl: '/app/views/SearchPage.html'
            })
        .otherwise({ redirectTo: '/' });
        
});

}());