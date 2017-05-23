export default ngModule => {
  ngModule.factory('clubesService', function ($http) {
    const URLS = {
      GET: 'https://jsonplaceholder.typicode.com/posts'
    };
    let clubes = null;

    function extractData(result) {
      return result.data;
    }

    function cacheData(result) {
      clubes = extractData(result);
      return clubes;
    }

    const getClubes = function () {
      return $http.get(URLS.GET).then(cacheData);
    };

    return {
      getClubes
    };

  });
};