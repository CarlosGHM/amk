export default ngModule => {
  ngModule.factory('loginService', function () {

    function saveToLocalStorage(username) {
      localStorage.userInfo = angular.toJson({ username });
    }

    const isLoggedIn = function () {
      const userInfo = angular.fromJson(localStorage.getItem('userInfo'));
      if (userInfo && userInfo.username === 'admin') {
        return true;
      } else {
        return false;
      }
    };

    const logout = function () {
      localStorage.clear();
    };

    const login = function (username, password) {
      if (username === 'admin' && password === '123456') {
        saveToLocalStorage(username);
        return true;
      } else {
        return false;
      }
    };

    return {
      login,
      logout,
      isLoggedIn
    };
  });
};