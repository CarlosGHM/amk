export default ngModule => {
  ngModule.controller('HomeController', function ($mdSidenav, loginService) {
    const vm = this;
    vm.toggleUsersList = function () {
      $mdSidenav('left').toggle();
    };
    vm.logout = function () {
      loginService.logout();
    };
  });
};