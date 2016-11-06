(function () {
"use strict";

angular.module('public')
.controller('UserRegForm', UserRegForm);

UserRegForm.$inject = ['MenuService'];
// function UserRegForm(menuCategories) {
function UserRegForm(MenuService) {
	var $ctrl = this;
	$ctrl.firstName = '';
	$ctrl.lastName = '';
	$ctrl.email = '';
	$ctrl.phone = '';
	$ctrl.favoriteDish = '';
	$ctrl.favoriteDishValidated = true;

	$ctrl.submit = function() {
		console.log('submit()');
		var promise = MenuService.validateMenuItem($ctrl.favoriteDish);
		promise.then( function(response) {
				if ( response.status == 200 ) {
					$ctrl.favoriteDishValidated = true;					
				} else {
					$ctrl.favoriteDishValidated = false;					
				}
			});
				// console.log(response);
			// }, function(response) {
			// 	console.log(response);
			// });
		// $ctrl.favoriteDishValidated = MenuService.validateMenuItem($ctrl.favoriteDish)
		// console.log($ctrl.favoriteDishValidated)
		// if (MenuService.validateMenuItem($ctrl.favoriteDish) == true ) {
		// 	console.log('dish valid');
		// 	$ctrl.favoriteDishValidated = true
		// } else {
		// 	console.log('dish invalid');
		// 	$ctrl.favoriteDishValidated = false
		// }
	}
}


})();
