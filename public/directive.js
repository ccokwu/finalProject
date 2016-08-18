var app = angular.module("ngAnimeApp");
app.directive("animeInputs", function(){
  return {
    restrict: "AE",
    templateUrl: "partials/home.html"
  };
})
