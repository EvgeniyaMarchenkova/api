var app = angular.module('myApp');

app.controller('checkWeatherController', function ($scope,  httpRequestFactory) {
    $scope.search = '';
    $scope.options = {
        types: '(cities)'
    };
    $scope.details = '';
    $scope.itemNumber =3;
    $scope.httpRequestFactory = httpRequestFactory;

})