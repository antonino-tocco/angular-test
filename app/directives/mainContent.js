controllers.directive('mainContent', function () {
   return {
       restrict: 'E',
       replace: true,
       scope: {},
       template: '<div ui-view></div>'
   }
});