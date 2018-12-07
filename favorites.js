(function(angular) {
    'use strict';
  function FavoritesController( favoritesFactory ) {
    var ctrl = this;
  
    ctrl.recipes = favoritesFactory.get();
  }
  
  angular.module('recipeApp').component('favoritesList', {
    templateUrl: 'favoritesList.html',
    controller: FavoritesController
  });
  })(window.angular);