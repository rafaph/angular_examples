'use strict';

module.exports = ['$scope', 'CEPService', function($scope, CEPService) {
	$scope.inCep = '';
	$scope.ceps = [];
	$scope.searchState = 'Buscar';
	$scope.searchStatus = false;
	$scope.searchCep = function($event) {
		if(/^\d{5}\-?\d{3}$/.test($scope.inCep)) {
			$scope.searchStatus = true;
			$scope.searchState = 'Buscando...';
			CEPService.getDataFromCep($scope.inCep).then(function(res) {
				$scope.inCep = '';
				$scope.searchState = 'Buscar';
				$scope.searchStatus = false;
				if(res.status === 200) {
					$scope.ceps.push(res.data);
				}
			}, function(res) {
				$scope.inCep = '';
				$scope.searchState = 'Buscar';
				$scope.searchStatus = false;
			});
		}
	};
}];
