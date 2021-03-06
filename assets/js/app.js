var myBlogApp = angular.module('BlogApp', ['ui.bootstrap', 'ngRoute']);

myBlogApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //no more #!
    $locationProvider.html5Mode(true);

    //define routes
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/user/new', {
            templateUrl: '/views/post/new.html',
            controller: 'UserNewCtrl'
        })
        .when('/user/show', {
            templateUrl: '/views/post/show.html',
            controller: 'UserShowCtrl'
        })
        .when('/user/edit/:id', {
            templateUrl: '/views/post/editModal.html',
            controller: 'UserEditCtrl'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'StaticCtrl'
        })
        .when('/faq', {
            templateUrl: '/views/faq.html',
            controller: 'StaticCtrl'
        })

}]);