export default ngModule => {
  ngModule.directive('clubes', function () {
    require('./clubes.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./clubes.html'),
      controller: function ($scope, $state, clubesService) {
        $scope.clubes = [];
        clubesService.getClubes().then(function (data) {
          $scope.clubes = data;
        });
        $scope.getClubeDetail = function (clube) {
          $state.go('home.clube', { clube: clube, id: clube.id });
        }
      }
    };
  });
} 