var myapp = angular.module('myapp',["ngRoute"]);

myapp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'/login.html'

    })
    .when('/dashboard',{
        templateUrl:'/dashboard.html'
    })
    .otherwise({
       redirectTo:'/' 
    });
});

myapp.controller('AppCtrl',function($scope,$location){
    console.log('Hello from controller');
    $scope.submit = function(){
        var uname = $scope.username;
        var password = $scope.password;
        console.log(uname,password);
        if(uname == 'admin' && password == 'admin')
            $location.path("/dashboard");   
            
        else
            alert('Invalid credentials');
    }
});