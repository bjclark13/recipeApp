(function(angular) {
  'use strict';
var app = angular.module('recipeApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      template : "<recipe-list></recipe-list>"
  })
  .when("/search", {
      template : "<recipe-list></recipe-list>"
  })
  .when("/favorites", {
      template : "<div> <h2>Favorites</h2> <p> Here, you can view or remove your favorite recipes. </p><favorites-list></favorites-list></div>"
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