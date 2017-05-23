export default ngModule => {
  ngModule.provider('userLogin', function LoginProvider() {

    function saveToLocalStorage(username) {
      localStorage.userInfo = angular.toJson({username});
    }

    function isLoggedIn() {
      const userInfo = angular.fromJson(localStorage.getItem('userInfo'));
      if (userInfo && userInfo.username === 'admin') {
        return true;
      } else {
        return false;
      }
    }

    function logout() {
      localStorage.clear();
    }

    function login(username, password) {
      if (username === 'admin' && password === '123456') {
        saveToLocalStorage(username);
        return true;
      } else {
        return false;
      }
    }

    function instantiateLoginProvider() {
      return ({
       
      });
    }

    return ({
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      $get: instantiateLoginProvider
    });
  });
};