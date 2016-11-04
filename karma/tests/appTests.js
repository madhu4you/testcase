
describe('Application Tests', function() {  //descibe Tests
    beforeEach(module("myApp")); //load my app module
    
    //filter test case
    describe('reverse a string', function() {  //describe the module test case
        var reverse;
        beforeEach(inject(function($filter){
            reverse = $filter("reverse", {});
        }));

        it("Should reverse a string", function(){ // write test cases
            expect(reverse("Rahul")).toBe("luhaR"); //pass
            expect(reverse("Madhu")).toBe("uhdaM"); //pass
            //expect(reverse("chandu")).toBe("abcde"); //this test should be fail
        });
    });

    //controller test case
    describe('add controller', function() {  //describe the controller module test case
        var $controller;
        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
        }));

        it("1 + 2 Should equal to 3", function(){ // write test cases
            var $scope = {};
            var controller = $controller("calculatorController", {$scope: $scope})
            $scope.num1 = 1;
            $scope.num2 = 2;
            $scope.add();
            expect($scope.sum).toBe(3);
        });
    });

    //factory test case
    describe('players Local Api', function() {  //describe the factory module test case
        var data = [{id: 1, name:'Madhu', age:'30', city:'bangalore'}, {id: 2, name:'Chandu', age:'30', city:'bangalore'}];
        var playersLocalApi = {};
        beforeEach(inject(function(_playersLocalApi_){
            playersLocalApi = _playersLocalApi_;
        }));

        it("Should return the players data", function(){ // write test cases
            expect(playersLocalApi.getPlayers()).toEqual(data);
        });
    });

    //factory with $http 
    describe('players with $http Api', function() {  //describe the factory module test case
        var playersApi, httpBackend;
        beforeEach(inject(function($httpBackend, _playersApi_){
            playersApi = _playersApi_;
            httpBackend = $httpBackend;
        }));

        it("Service test for spec", function(){ // write test cases
            var returnData = {};
            // expectGET this is called once
            httpBackend.expectGET("http://localhost:2300/data/players.json").respond(returnData);

            //make the called
            var returnedPromise = playersApi.getPlayers();

            //set up the handelr for response that will be the result

            var result = {};

            returnedPromise.then(function(response){
                result = response.data;
            });

            //flush the data
            httpBackend.flush();

            //check result
            expect(result).toEqual(returnData);
        });
    }); 
});
    