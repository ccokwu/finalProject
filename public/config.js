var app = angular.module("ngAnimeApp");
app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "partials/home.html",
    controller: "animeController"
  })
  .when("/search", {
    templateUrl: "partials/home.html",
    controller: "animeController"
  })
  .when("/aboutus", {
    templateUrl: "partials/home.html",
    controller: "animeController"
  })
  .when("/contactus", {
    templateUrl: "partials/home.html",
    controller: "animeController"
  })
  .when("/formSubmission", {
    templateUrl: "partials/formSubmission.html",
    controller: "animeController"
  })
  .otherwise({
    redirectTo: "/",
  });
});
