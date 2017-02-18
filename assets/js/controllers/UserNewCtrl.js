angular.module('BlogApp').controller('UserNewCtrl', function($scope, $http) {
    $scope.createUser = function() {
        var name = $scope.name;
        var username = $scope.username;
        var password = $scope.password;
        $http.post('/user/new', { name: name, username: username, password: password }).then(function(response) {
            console.log('Created success');
        }).catch(function(err) {
            console.log('Error: ' + err);
        })
        window.location = '/user/show';
    }
});