app.controller('adminCtrl', adminController);

adminController.$inject = ['$scope', 'DataFactory'];

function adminController($scope, DataFactory) {

    $scope.posts = DataFactory.posts;
    $scope.theMen = DataFactory.theMen;

}