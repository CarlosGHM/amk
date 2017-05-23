export default ngModule => {
  ngModule.service('clubesService', function ($http) {
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

    this.getClubes = function () {
      return $http.get(URLS.GET).then(cacheData);
    }
  });
}