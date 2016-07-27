angular.module('siteApp')
	.config(["$stateProvider", function($stateProvider){
		$stateProvider
	    .state('profile', {
	      url: '/profile',
	      templateUrl:  'js/code/templates/profile.html',
	      controller: 'ProfileCtrl',
	      reloadOnSearch: false
	    });
}])
.controller("ProfileCtrl",['$scope',function(){

	console.log("profile controller called");
}])
