export default ngModule => {
  ngModule.directive('login', function () {
    require('./login.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./login.html'),
      controllerAs: 'ctrl',
      controller: function ($state, $mdDialog, loginService) {
        const ctrl = this;
        loginService.isLoggedIn();
        ctrl.login = function () {
          if (loginService.login(ctrl.username, ctrl.password)) {
            $state.go('home.clubes');
          } else {
            $mdDialog.show(
              $mdDialog.alert()
                .textContent('Usuario o password incorrectos')
                .ok('Aceptar')
            );
          }
        };
      }
    };
  });
};