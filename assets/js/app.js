var app = angular.module("health", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.otherwise({
		templateUrl: "views/error.html"
	});

	$locationProvider.html5Mode(true);

});