var controllers = angular.module('ControllersModule', ['ModelModule'])
    .controller('baseController', ['$scope', 'Streams', '$state', function ($scope, Streams, $state) {
        $scope.rate = function (stream) {
            if(stream.isRated) {
                swal({
                    title: 'Operazione fallita',
                    text: 'Stream già votato.',
                    type: 'error'
                });
            } else {
                stream.incrementRating();
                swal({
                    title: 'Operazione eseguita',
                    text: 'Stream votato con successo.',
                    type: 'success'
                });
            }
        };
        $scope.goToSingleStream = function (stream) {
            Streams.setSelected(stream);
            $state.go('stream');
        };
    }]);