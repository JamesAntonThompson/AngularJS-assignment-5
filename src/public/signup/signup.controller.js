(function () {
"use strict";

angular.module('public')
.controller('UserRegForm', UserRegForm);

UserRegForm.$inject = ['MenuService', 'RegisterService'];
function UserRegForm(MenuService, RegisterService) {
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
					RegisterService.addReg( $ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, $ctrl.favoriteDish );
				} else {
					$ctrl.favoriteDishValidated = false;					
				}
			});
	}
}


})();
