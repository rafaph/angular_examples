'use strict';

module.exports = ['$http', function($http) {
	var apiUrl = 'http://cep.correiocontrol.com.br/';
	this.getDataFromCep = function (cep) {
		return $http.get(apiUrl + cep + '.json');
	};
}];
