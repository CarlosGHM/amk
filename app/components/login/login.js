export default ngModule => {
  ngModule.directive('login', function ($state, loginService) {
    require('./login.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./login.html'),
      controllerAs: 'ctrl',
      controller: function () {
        const ctrl = this;
        loginService.isLoggedIn();
        ctrl.login = function () {
          if(loginService.login(ctrl.username, ctrl.password)) {
            $state.go('home.clubes');
          } else {
            console.log('Username or password incorrect');
          }
        }
      }
    };
  });
};