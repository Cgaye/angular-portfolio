var app = /*global angular*/angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'Views/Home.html' 
    }) 
  	.when('/projects', {
    controller: 'MainController',
    templateUrl: 'Views/Projects.html'
  })
    .when('/aboutMe', {
    controller: 'MainController',
    templateUrl: 'Views/AboutMe.html'
    })
   .when('/contactMe', {
    controller: 'MainController',
    templateUrl: 'Views/ContactMe.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
