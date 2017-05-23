export default ngModule => {
  ngModule.directive('clube', function () {
    require('./clubeDetail.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./clube.detail.html'),
      controller: function ($scope, $stateParams) {
        $scope.clube = $stateParams.clube;
        $scope.id = $stateParams.id;
      }
    };
  });
}; 