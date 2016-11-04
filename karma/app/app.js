var myApp = angular.module("myApp", []);

myApp.filter("reverse", [function(){
    return function(str){
        return str.split("").reverse().join("");
    }
}]);


myApp.controller("calculatorController", function($scope){
    $scope.add = function(){
        $scope.sum = $scope.num1 + $scope.num2;
    }
});

myApp.factory("playersLocalApi", function(){
    var data = [{id: 1, name:'Madhu', age:'30', city:'bangalore'}, {id: 2, name:'Chandu', age:'30', city:'bangalore'}];
    var playersLocalApi = {};
    playersLocalApi.getPlayers = function(){
        return data;
    }
    return playersLocalApi;
});

myApp.factory("playersApi", function($http){
    var urlBase = "http://localhost:2300/";
    var playersApi = {};
    playersApi.getPlayers = function(){
        return $http.get(urlBase + "data/players.json");
    }
    return playersApi;
});