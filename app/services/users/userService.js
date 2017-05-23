 export default ngModule => {
  ngModule.service('userService', function ($http) {
    const URLS = {
      GET: 'https://jsonplaceholder.typicode.com/users'
    };
    let users = null;

    function extractData(result) {
      return result.data;
    }

    function cacheData(result) {
      users = extractData(result);
      return users;
    }

    this.getUsers = function () {
      return $http.get(URLS.GET).then(cacheData);
    }
  });
}