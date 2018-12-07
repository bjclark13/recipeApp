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
  template: '<div> <h2>{{$ctrl.recipe.label}}</h2> <img src="{{$ctrl.recipe.image || \'\'}}"/> <h3>Source: <a href="{{$ctrl.recipe.url}}" target="_blank">{{$ctrl.recipe.source}}</a> </h3> <div ng-if="$ctrl.open"> <h4>Calories: </h4> <p>{{$ctrl.recipe.calories | number: 0}}({{($ctrl.recipe.calories / $ctrl.recipe.yield) | number: 0}}per serving)</p><h4> Servings:{{$ctrl.recipe.yield}}</h4> <h4> Ingredients: </h4> <ul> <li ng-repeat="line in $ctrl.recipe.ingredientLines">{{line}}</li></ul> <h4> Nutrition Facts: </h4> <p ng-repeat="fact in $ctrl.recipe.digest">{{fact.label}}:{{fact.total | number:0}}</p><div> <button ng-click="$ctrl.toggle()"> Less Details</button> </div></div><button ng-if="!$ctrl.open" ng-click="$ctrl.toggle()"> More Details</button> <button ng-click="$ctrl.addToFavorites()" ng-if="!$ctrl.favorites && !$ctrl.added"> Add to Favorites </button> <button ng-click="$ctrl.removeFromFavorites($index)" ng-if="$ctrl.favorites"> Remove From Favorites </button> </div>',
  controller: RecipeDetailsController,
  bindings: {
    recipe: '<',
    favorites: '<'
  }
});
})(window.angular);
