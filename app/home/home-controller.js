app.controller('homeCtrl', homeController);

homeController.$inject = ['$scope', '$http', '$sce', 'DataFactory'];

function homeController($scope, $http, $sce, DataFactory) {
    $scope.theMenHover = false;
    $scope.theMenSelected = false;
    $scope.selectedStory = false;
    $scope.selectedGalleryImage = false;
    $scope.galleryStory = false;

    $scope.posts = DataFactory.posts;
    
    DataFactory.getMenProfiles().then(function(response) {
      $scope.theMen = response.data;
    })

    $scope.selectMan = function(man) {
      // console.log(man);
      $scope.theMenSelected = man;
      $scope.selectedStory = man.stories[0];
    }

    $scope.selectStory = function(story) {
      // console.log(story);
      $scope.selectedStory = story;
    }

    $scope.openGallery = function(image, story) {
      console.log(image)
      $scope.selectedGalleryImage = image;
      $scope.galleryStory = story;
    }

    $scope.closeGallery = function() {
      $scope.selectedGalleryImage = false;
    }

    $scope.goTo = function(postID) {
      $scope.currentPostID = postID;
      $scope.navOpen = false;
    }

    $(document).ready(function() {
        $('.header-title').affix({
            offset: {
                top: 50
            }
        });
    })

}
