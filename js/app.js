var app = angular.module('app', []);

app.config(["$routeProvider", "$httpProvider",
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
    $routeProvider
      .when('/', {
        templateUrl: 'pages/whoAmI.html',
        controller: "whoAmIController"
      })
 /*     .when('/peopleList', {
        templateUrl: 'views/peopleList.html',
        controller: "PeopleListController"
      })	  
      .when('/signup', {
        templateUrl: 'views/signup.html',
	controller: "SignupController"
      })	  
*/
      .otherwise({
        redirectTo: '/'
      });
  }
]);
