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
        controller: "dragDropController"
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


app.directive('draggable', function() {
    return function(scope, element) {
        // this gives us the native JS object
        var elOrigin = element[0];
        var el=elOrigin;

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                /*this.classList.remove('lightStylePanel');*/
                this.classList.add('lightStylePanelDrag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('lightStylePanelDrag');
                /*this.classList.add('lightStylePanel');*/
                return false;
            },
            false
        );
    }
});

app.directive('droppable', function() {
  return {
      scope: {
        drop: '&' // parent
      },
      link:function(scope, element) {
        // again we need the native object
      var el = element[0];

      el.addEventListener(
        'dragover',
        function(e) {
            e.dataTransfer.dropEffect = 'move';
            // allows us to drop
            if (e.preventDefault) e.preventDefault();
            this.classList.add('over');
            return false;
        },
        false
      );

      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          return false;
        },
        false
      );

      el.addEventListener(
        'dragleave',
        function(e) {
            this.classList.remove('over');
            return false;
        },
        false
      );

      el.addEventListener(
        'drop',
        function(e) {
        // Stops some browsers from redirecting.
        if (e.stopPropagation) e.stopPropagation();
        e.preventDefault();

        this.classList.remove('over');

        var item = document.getElementById(e.dataTransfer.getData('Text'));
        /*this.appendChild(item);*/
        this.classList.add('dropped');

        // call the drop passed drop function
        scope.$apply('drop()');

        return false;
        },
        false
      ); 
    }
  }
});