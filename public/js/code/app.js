angular.module("siteApp",['ui.router','ui.bootstrap'])
.config( function($locationProvider, $urlRouterProvider, $httpProvider){
	$urlRouterProvider.otherwise('/profile');
})
.run( function  ($window,$rootScope,$state) {
	$rootScope.$on( '$stateChangeStart', function(e, toState  , toParams
                                                   , fromState, fromParams) {
		$rootScope.selectedTab = toState.name;
		console.log(toState);
      });
});
