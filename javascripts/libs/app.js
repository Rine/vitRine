var app = angular.module('app', []);

app.config(["$routeProvider", "$httpProvider",
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
    $routeProvider
      .when('/', {
        templateUrl: 'pages/whoAmI.html',
        controller: "whoAmIController"
      })
      .when('/me', {
        templateUrl: 'pages/me.html',
        controller: "whoAmIController"
      })	  
 /*     .when('/signup', {
        templateUrl: 'views/signup.html',
	controller: "SignupController"
      })	  
*/
      .otherwise({
        redirectTo: '/'
      });
  }
]);
