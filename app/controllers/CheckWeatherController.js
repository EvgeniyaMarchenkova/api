var app = angular.module('myApp');

app.controller('checkWeatherController', function ($scope,  $http) {

    $scope.results =[];
    $scope.getWeather = function() {

        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.search+"&APPID=170fb5209f8eb67ee44eb90ccc45b4eb").then(
            function (response) {
                $scope.resultResponse = {
                    name:$scope.search,
                    code:response.data.sys.country,
                    temp:response.data.main.temp,
                    description:response.data.weather[0].description,
                    iconUrl:"http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png"


                }
             //   $scope.iconUrl = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
                $scope.results.push($scope.resultResponse);




            }
        )
    }


})