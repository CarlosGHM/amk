export default ngModule => {
  ngModule.directive('suscriptor', function () {
    require('./suscriptorDetail.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./suscriptor.detail.html'),
      controller: function ($scope, $stateParams) {
        $scope.suscriptor = $stateParams.suscriptor;
        $scope.id = $stateParams.id;
      }
    };
  });
}; 