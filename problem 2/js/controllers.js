'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PaymentCalcCtrl', ['$scope', function($scope) {
  $scope.calc = {"amount": 10};
	$scope.TransPercent = 0.029;
	$scope.PerTransactionFee = 0.30;
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
