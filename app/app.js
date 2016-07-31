/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('AngularTest', ['UserModule','ModelModule', 'ControllersModule', 'ui.router', 'ngMessages'])
    .controller('bootController', function ($scope, User) {
        $scope.loading = true;
        User.login()
            .then(function () {
                $scope.loading = false;
            });
    })
    .config(['$stateProvider', '$urlRouterProvider', '$compileProvider',
        function ($stateProvider, $urlRouterProvider, $compileProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'homeController',
                    templateUrl: 'app/views/home.html'
                })
                .state('stream', {
                    url: '/stream',
                    controller: 'streamController',
                    templateUrl: 'app/views/singleStream.html'
                });
            $urlRouterProvider.otherwise('/');
    }]);