export default ngModule => {
  ngModule.service('loginService', function () {

    function saveToLocalStorage(username) {
      localStorage.userInfo = JSON.stringify({ username });
    }

    this.isLoggedIn = function() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if( userInfo && userInfo.username === 'admin'){
        return true;
      } else {
        return false;
      }
    }

    this.logout = function() {
      localStorage.clear();
    }

    this.login = function (username, password) {
      if (username === 'admin' && password === '123456') {
        saveToLocalStorage(username);
        return true;
      } else {
        return false;
      }
    }
  });
}