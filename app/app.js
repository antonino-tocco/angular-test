/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('AngularTest', ['MainServiesModule', 'ControllersModule'])
    .config(['$stateProvider', '$urlRouterProvider', '$compileProvider',
        function ($stateProvider, $urlRouterProvider, $compileProvider) {
            $stateProvider
                .state('home', {

                })
                .state('', {

                });
    }])
    .run(function () {

    });