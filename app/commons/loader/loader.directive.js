angular.module('energyArtApp')
	.directive('glnLoader', function($rootScope){
		return {
			restrict: 'E',
			templateUrl: 'commons/loader/loader.tmpl.html',
			link: function(scope, elem, attr) {
				scope.isStateLoading = false;

				$rootScope.$on('startLoadingData', function(){
					console.log('change loading state');
					scope.isStateLoading = true;
				});
				$rootScope.$on('successLoadingData', function(){
					scope.isStateLoading = false;
				});
			}
		};
	});