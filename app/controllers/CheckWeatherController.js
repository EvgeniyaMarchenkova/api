var app = angular.module('myApp');

app.controller('checkWeatherController', function ($scope,  $http) {
    $scope.getWeather = function(){
        $scope.results =[]; var newResults;
        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.search+"&APPID=170fb5209f8eb67ee44eb90ccc45b4eb").then(
            function (response) {
                $scope.results.push($scope.search);
                $scope.results.push(response.data.sys.country);
                $scope.results.push(response.data.main.temp-273);
                $scope.results.push(response.data.weather[0].description);
                $scope.results.push(response.data.weather.id);

            }
        )
    }


})