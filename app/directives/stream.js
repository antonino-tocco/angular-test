controllers.directive('stream', function () {
   return {
       restrict: 'E',
       replace: true,
       templateUrl: 'app/views/directives/stream.html',
       scope: {
           stream: "=",
           truncate: "=",
           showReadMore: "="
       },
       controller: function ($scope, $controller) {
           angular.extend(this, $controller('baseController', {$scope: $scope}));
       }
   }
});