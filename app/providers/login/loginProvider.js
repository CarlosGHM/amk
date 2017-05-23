export default ngModule => {
  ngModule.provider('userLogin', function LoginProvider() {

    function saveToLocalStorage(username) {
      localStorage.userInfo = JSON.stringify({ username });
    }

    function isLoggedIn() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo && userInfo.username === 'admin') {
        console.log('El usuario está logueado');
        return true;
      } else {
        console.log('El usuario NO está logueado');
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
    };

    return ({
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      $get: instantiateLoginProvider
    });
  });
}