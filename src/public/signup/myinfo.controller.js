(function () {
"use strict";

angular.module('public').controller('MyInfo', MyInfo);

MyInfo.$inject = ['MenuService', 'RegisterService'];
function MyInfo(MenuService, RegisterService) {
	var $ctrl = this;

	$ctrl.regUser = RegisterService.getReg();
	$ctrl.hasRegUser = RegisterService.hasRegUser;

	var promise = MenuService.validateMenuItem($ctrl.regUser.favorite);
	promise.then( function(response) {			
			if ( response.status == 200 ) {
				console.log(response.data);
				$ctrl.favoriteDesc = response.data.description;
				$ctrl.favoriteName = response.data.name;
				$ctrl.favoriteCategory = response.data.category_short_name;
			}});
}


})();
