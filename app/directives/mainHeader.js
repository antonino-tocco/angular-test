controllers.directive('mainHeader', ['User', function (User) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/views/directives/mainHeader.html',
        controller: function ($scope) {
            $scope.appName = 'Angular Test App';
            $scope.userName = User.getUsername();
        }
    }
}]);