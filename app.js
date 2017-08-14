var app = angular.module('myApp',['ngRoute']);


app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
 $routeProvider
    .when('/',{
            templateUrl:'home.html',
            controller:"homeCtrl"
 })
    .when('/login',{
            templateUrl:'login.html',
            controller:"loginCtrl"
 })
    .when('/signup',{
            templateUrl:'signup.html',
            controller:"signupCtrl"
 });
});

app.controller('myCtrl',function($scope,$http){
   var id="418da4b546abed015d3115ff15330150";
    $http.get("http://api.openweathermap.org/data/2.5/forecast?q=Kolkata&APPID="+id)
    .then(success,failure);
    function success(response){
     console.log(response); 
        $scope.weather=response.data.list[0];
    }
    function failure(err){
        console.log(err);
    }
});
