export default ngModule => {
  ngModule.controller('HomeController', function ($mdSidenav, loginService) {

    this.toggleUsersList = function() {
      $mdSidenav('left').toggle();
    }
    this.logout = function(){
      loginService.logout();
    }
  });
}