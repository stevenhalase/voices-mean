app.factory('DataFactory', dataFactory);

dataFactory.$inject = ['$http'];

function dataFactory($http) {

    function getMenProfiles() {
      return $http.get('/api/men');
    }

    function updateMan(man) {
      return $http({
        url: '/api/men',
        method: 'POST',
        data: {man: man}
      })
    }

    function updateMen(man) {
      return $http({
        url: '/api/men/new',
        method: 'POST',
        data: {man: man}
      })
    }

    function deleteMan(man) {
      return $http({
        url: '/api/men/delete',
        method: 'POST',
        data: {man: man}
      })
    }

    return {
        getMenProfiles : getMenProfiles,
        updateMan : updateMan,
        updateMen : updateMen,
        deleteMan : deleteMan
    }
}
