export default ngModule => {
  ngModule.directive('suscriptors', function () {
    require('./suscriptors.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./suscriptors.html'),
      controller: function ($scope, $state, userService) {
        $scope.users = [];
        userService.getUsers().then(function (data) {
          $scope.users = data;
        });
        $scope.getSuscriberDetail = function (suscriber) {
          $state.go('home.suscriber', { suscriptor: suscriber, id: suscriber.id });
        };
      }
    };
  });
}; 