angular.module('BlogApp').controller('UserEditCtrl', function($scope, $http, $routeParams) {
    $http.get('/getUser/' + $routeParams.id).then(function(response) {
        $scope.user = response.data[0];
    });
    $scope.editUser = function() {
        var name = $scope.user.name;
        var username = $scope.user.username;
        var data = { name: name, username: username };
        console.log('Data: ' + data);
        $http.post('/update/' + $routeParams.id, data).then(function(response) {
            $scope.alert = 'Update full';
            console.log('Update success');
        }).catch(function(err) {
            console.log('Error: ' + err);
        });
        window.location = '/user/show';
    }

})