var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', function ($scope, $http, Phone, deviceDetector){

	$scope.os = deviceDetector.os;
	$scope.os_version = deviceDetector.os_version;
	$scope.device = deviceDetector.device;
	$scope.browser = deviceDetector.browser;

	$scope.phones = Phone.query();

	$scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl', function($scope, $http, $routeParams, $http, Phone){

    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		$scope.mainImageUrl = phone.images[0];
	});

    $scope.setImage = function(imageUrl){
    	$scope.mainImageUrl = imageUrl;
    }
});