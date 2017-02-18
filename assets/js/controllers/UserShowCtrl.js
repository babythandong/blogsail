angular.module('BlogApp').controller('UserShowCtrl', function($scope, $http, $routeParams, $location) {
    $http.get('/getAllUser').then(function(response) {
        $scope.users = response.data;
    });
    $scope.remove = function(id) {
        $http.put('/delete/' + id).then(function(response) {
            console.log('Delete');
        });
        $location.path('/user/show');

    }
})