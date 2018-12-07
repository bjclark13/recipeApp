(function(angular) {
  'use strict';
  angular.module('recipeApp').component('recipeList', {
    template: '<h2> Recipes </h2><recipe-search recipes="$ctrl.recipes"></recipe-search><recipe-details ng-repeat="recipe in $ctrl.recipes" recipe="recipe"></recipe-details>',
  });
})(window.angular);