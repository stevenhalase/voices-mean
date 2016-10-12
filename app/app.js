var app = angular.module('voicesApp', ['ui.router', 'ngSanitize', 'xeditable', 'angularTrix', 'ngFileUpload']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config(voicesConfig);

voicesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function voicesConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './home/home.html',
      controller: 'homeCtrl as hCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: './admin/admin.html',
      controller: 'adminCtrl as aCtrl'
    })

  $urlRouterProvider.otherwise('/');
}

app.controller('mainCtrl', mainController);

mainController.$inject = ['$scope', '$http', '$sce'];

function mainController($scope, $http, $sce) {
    $scope.title = 'This title';
    $scope.navOpen = false;
    $scope.posts = [];
    $scope.currentPostID = 1;
    $scope.showCarousel = false;
    $scope.showVideo = false;

    $scope.openNav = function() {
        if ($scope.navOpen) {
          $scope.navOpen = false;
        } else {
          $scope.navOpen = true;
        }
    }



    $scope.changeSlide = function(carouselID, direction) {
      var selector = '#carousel-' + carouselID;
      console.log(selector)
      if (direction == 'next') {
        $(selector).carousel('next')
      }
      if (direction == 'prev') {
        $(selector).carousel('prev')
      }
    }

    $scope.activateCarousel = function(modalID, type) {
      $scope.showCarousel = false;
      $scope.showVideo = false;
      $scope.showAudio = false;
      console.log('activating')
      var selector = '#modal-' + modalID;
      console.log(selector);
      if (type == 'carousel') {
        $scope.showCarousel = true;
      } else if (type == 'video') {
        $scope.showVideo = true;
      } else {
        $scope.showAudio = true;
      }
      $(selector).modal('show');
    }

    $scope.sanitizeURL = function(url) {
      return $sce.trustAsResourceUrl(url);
    }


    $(document).ready(function() {

      $('html').click(function(event){
      //   console.log(event.target.className)
        if (event.target.className == 'side-nav-backer side-nav-backer--open') {
          // console.log('backer', iCtrl.navOpen)
          $scope.navOpen = false;
          $scope.$apply();
        }

        if (event.target.className == 'gallery-backer') {
          // console.log('backer', iCtrl.navOpen)
          $scope.selectedGalleryImage = false;
          $scope.$apply();
        }
      });

    })


}
