(function(angular) {
  'use strict';
var app = angular.module('recipeApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "recipeList.html"
  })
  .when("/search", {
      templateUrl : "recipeList.html"
  })
  .when("/favorites", {
      templateUrl : "favorites.html"
  })
});

app.factory('favoritesFactory', function() {
  var Favorites = {};
  var _favorites = [];

  if ( window.localStorage.getItem('favorites') ) {
    _favorites = JSON.parse(window.localStorage.getItem('favorites'));
  }

  Favorites.add = function(recipe) {
    _favorites.push(recipe);
    window.localStorage.setItem('favorites', JSON.stringify(_favorites));
  };

  Favorites.remove = function(index) {
    _favorites.splice(index, 1);
    window.localStorage.setItem('favorites', JSON.stringify(_favorites));
  }

  Favorites.get = function() {
    console.log(_favorites);
    return _favorites;
  }

  return Favorites;
});

})(window.angular);