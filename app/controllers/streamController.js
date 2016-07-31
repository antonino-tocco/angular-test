controllers.controller('streamController', ['$scope', 'Streams', function ($scope, Streams) {

    $scope.truncate = false;
    $scope.showReadMore = false;
    var loadStream = function () {
        $scope.stream  = Streams.getSelected()
    };
    $scope.$on('$viewContentLoaded', function () {
        loadStream();
    });
    $scope.$on('$destroy', function () {
        Streams.resetSelected();
    })
}]);
