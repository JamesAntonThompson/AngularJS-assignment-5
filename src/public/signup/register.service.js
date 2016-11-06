(function () {
"use strict";

angular.module('public').service('RegisterService', RegisterService);


// RegisterService.$inject = ['$http', 'ApiPath'];
function RegisterService() {
	var service = this;

	// service.regList = [];
	service.reguser = {};
	service.hasRegUser = false;


	service.addReg = function(firstName, lastName, email, phone, favorite) {
		console.log('AddReg')
		service.reguser.firstName = firstName;
		service.reguser.lastName = lastName;
		service.reguser.email = email;
		service.reguser.phone = phone;
		service.reguser.favorite = favorite;
		service.hasRegUser = true;
	}

	service.getReg = function() {
		return service.reguser;
	}

}

})();
