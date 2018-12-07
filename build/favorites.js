(function(angular) {
    'use strict';
  function FavoritesController( favoritesFactory ) {
    var ctrl = this;
  
    ctrl.recipes = favoritesFactory.get();
  }
  
  angular.module('recipeApp').component('favoritesList', {
    template: '<recipe-details ng-repeat="recipe in $ctrl.recipes track by $index" recipe="recipe" favorites="true"></hero-detail>',
    controller: FavoritesController
  });
  })(window.angular);