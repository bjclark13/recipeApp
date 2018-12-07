(function(angular) {
    'use strict';
    function RecipeSearch($http) {
        var ctrl = this;
        
        ctrl.delete = function() {
            ctrl.onDelete({hero: ctrl.hero});
        };
        
        ctrl.update = function(prop, value) {
            ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
        };
        
        ctrl.search = function() {
            var url="https://api.edamam.com/search";
            var id = "&app_id=7a3e7654&app_key=869d4b82f8b2abbbc479cee0fefa439c";
            var query = "?q=" + ctrl.q;
            
            var apiCall = url += query += id;
            
            Object.keys(ctrl.diet).forEach( function( key ) {
                console.log(key);
                
                if ( ctrl.diet[key])
                apiCall += '&diet=' + key;
            });

            if (ctrl.minCals || ctrl.maxCals) {
                apiCall += '&calories=';

                if ( ctrl.minCals && ctrl.maxCals ) {
                    apiCall += ctrl.minCals + '-' + ctrl.maxCals;
                } else {
                    if ( ctrl.minCals ) {
                        apiCall += ctrl.minCals + '+';
                    } else {
                        apiCall += ctrl.maxCals;

                    }
                }
            }
            
            $http.get(apiCall)
            .then(function(response) {
                
                if ( response.status === 200 ) {
                    // Set recipes
                    ctrl.recipes = response.data.hits.map( function(hit) { return hit.recipe } ); 
                }
            });
        };
        
        ctrl.diet = {};
        
        // TODO: there's got to be a way to do this through the API
        ctrl.dietaryRestrictions = {
            balanced: 'Balanced',
            'high-fiber': 'High-Fiber',
            'high-protein': 'High-Protein',
            'low-carb': 'Low-Carb',
            'low-fat': 'Low-Fat',
            'low-sodium': 'Low-Sodium'
        };
    }
    
    angular.module('recipeApp').component('recipeSearch', {
        template: '<form ng-Submit="$ctrl.search()"> <input type="text" ng-model="$ctrl.q" placeholder="Search for a recipe!" required/> <div ng-repeat="(value, label) in $ctrl.dietaryRestrictions"> <label style="width: 250px" > <span>{{label}}</span> <input type="checkbox" ng-model="$ctrl.diet[value]" style="width: 250px"/> </label> </div><p> <input type="number" ng-model="$ctrl.minCals" placeholder="Minimum Calories per Serving" style="width: 250px"/> </p><p> <input type="maxCals" ng-model="$ctrl.maxCals" placeholder="Maximum Calories per Serving" style="width: 250px"/> </p><button type="submit"> Search </button></form>',
        controller: RecipeSearch,
        bindings: {
            recipes: '=',
            onDelete: '&',
            onUpdate: '&'
        }
    });
})(window.angular);
