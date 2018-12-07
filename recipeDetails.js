(function(angular) {
  'use strict';
function RecipeDetailsController( favoritesFactory ) {
  var ctrl = this;

  ctrl.open = false;

  ctrl.toggle = function() {
    console.log('toggle');
    ctrl.open = !ctrl.open;
  }

  ctrl.addToFavorites = function() {
    favoritesFactory.add(ctrl.recipe);
    ctrl.added = true;
  }

  ctrl.removeFromFavorites = function(index) {
    favoritesFactory.remove(index);
  }
}

angular.module('recipeApp').component('recipeDetails', {
  templateUrl: 'recipeDetails.html',
  controller: RecipeDetailsController,
  bindings: {
    recipe: '<',
    favorites: '<'
  }
});
})(window.angular);
