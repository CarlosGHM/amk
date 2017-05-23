export default ngModule => {
  ngModule.config(function ($stateProvider, $locationProvider, $mdIconProvider, $urlRouterProvider, userLoginProvider) {

    function validateUserCredentials() {
      if (!userLoginProvider.isLoggedIn()) {
        $stateProvider.stateService.go('login');
      }
    }

    function validateUserCredentialsOnLoginView() {
      if (userLoginProvider.isLoggedIn()) {
        $stateProvider.stateService.go('home');
      }
    }

    $stateProvider.state('home', {
      url: '/home',
      template: require('../home-template.html'),
      onEnter: validateUserCredentials,
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    }).state('login', {
      url: '/login',
      template: require('../login-template.html'),
      onEnter: validateUserCredentialsOnLoginView
    }).state('home.suscribers', {
      url: '/suscribers',
      template: require('../susc-template.html'),
      onEnter: validateUserCredentials
    }).state('home.suscriber', {
      url: '/suscriber-detail/:id',
      template: require('../suscriptor-detail-template.html'),
      onEnter: validateUserCredentials,
      params: { suscriptor: null, id: null }
    }).state('home.clubes', {
      url: '/clubes',
      template: require('../clubes-template.html'),
      onEnter: validateUserCredentials
    }).state('home.clube', {
      url: '/clube-detail/:id',
      template: require('../clube-detail-template.html'),
      onEnter: validateUserCredentials,
      params: { clube: null, id: null },
    });
    $urlRouterProvider.otherwise('home');
    $locationProvider.html5Mode(true);
  });
};