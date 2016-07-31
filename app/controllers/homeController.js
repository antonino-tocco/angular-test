controllers.controller('homeController', ['$scope', '$controller', 'Streams', 'User', function ($scope,  $controller, Streams, User) {
    angular.extend(this, $controller('baseController', {$scope: $scope}));

    $scope.orders = [
        {
            name: 'Rating (ASC)',
            field: 'rating'
        },
        {
            name: 'Rating (DESC)',
            field: '-rating'
        },
        {
            name: 'Date (ASC)',
            field: 'created_at'
        },
        {
            name: 'DATE (DESC)',
            field: '-created_at'
        }
    ];
    $scope.newStream = {
        rating: 0,
        message: null,
        author: User.getProfile()
    };
    $scope.truncate = true;
    $scope.showReadMore = true;
    $scope.selectedOrder = $scope.orders[0].field;
    var loadContent = function () {
        Streams.getAll()
            .then(function (streams) {
                $scope.streams = streams;
            });
    };
    $scope.createStream = function () {
        $scope.newStream.created_at = moment(new Date());
        Streams.push($scope.newStream)
            .then(function (streams) {
               swal({
                   title: 'Operazione eseguita.',
                   text: 'Stream inserito con successo.',
                   type: 'success'
               });
                $scope.newStream = {
                    rating: 0,
                    message: null,
                    author: User.getProfile()
                };
                $scope.streams = streams;
            }, function (error) {
                swal({
                    title: 'Operazione fallita.',
                    text: 'Si è verificato un errore nell\'inserimento dello stream.',
                    type: 'error'
                });
            });
    };

    $scope.$on('$viewContentLoaded', function () {
        loadContent();
    });
}]);
