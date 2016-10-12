app.controller('adminCtrl', adminController);

adminController.$inject = ['$scope', 'DataFactory', 'Upload', '$window', '$timeout'];

function adminController($scope, DataFactory, Upload, $window, $timeout) {

    DataFactory.getMenProfiles().then(function(response) {
      console.log(response.data)
      $scope.theMen = response.data;
      $scope.selectedMan = $scope.theMen[0];
      $scope.selectedStory = $scope.selectedMan.stories[0];
    })

    $scope.addMan = function() {
      var newMan = {
        firstName: 'John',
        lastName: 'Doe',
        unit: 'FWMC',
        img: './images/avatar-placeholder.png',
        video : '',
        audio: '',
        images : [],
        stories : [{
          id: 1,
          title: 'Story Title',
          images: [],
          content: 'Story Content Goes Here.'
        }]
      }

      DataFactory.updateMen(newMan).then(function(response) {

        DataFactory.getMenProfiles().then(function(profilesResponse) {
          console.log(profilesResponse.data)
          $scope.theMen = profilesResponse.data;
          $scope.selectedMan = $scope.theMen[$scope.theMen.length - 1];
          $scope.selectedStory = $scope.selectedMan.stories[0];

          $scope.alertMessage = 'Successfully Added Profile';
          $scope.showSuccessAlert = true;

          $timeout(function() {
            console.log('time', $scope.showSuccessAlert)
            $scope.showSuccessAlert = false;
          }, 3000)
        })
      })
    }

    $scope.deleteMan = function(man) {
      DataFactory.deleteMan(man).then(function(response) {
        console.log(response);

        DataFactory.getMenProfiles().then(function(profilesResponse) {
          console.log(profilesResponse.data)
          $scope.theMen = profilesResponse.data;
          $scope.selectedMan = $scope.theMen[0];
          $scope.selectedStory = $scope.selectedMan.stories[0];

          $scope.alertMessage = 'Successfully Removed Profile';
          $scope.showSuccessAlert = true;

          $timeout(function() {
            console.log('time', $scope.showSuccessAlert)
            $scope.showSuccessAlert = false;
          }, 3000)
        })

      })
    }

    $scope.addStory = function() {
      var newStory = {
        id: $scope.selectedMan.stories.length+1,
        title: 'Story Title',
        images: [],
        content: 'Story Content Goes Here.'
      };
      $scope.selectedMan.stories.push(newStory);
      console.log($scope.selectedMan.stories[$scope.selectedMan.stories.length - 1])
      $scope.selectedStory = $scope.selectedMan.stories[$scope.selectedMan.stories.length - 1];

      $scope.alertMessage = 'Successfully Added Story';
      $scope.saveMan();
    }

    $scope.deleteStory = function(story) {
      $scope.selectedMan.stories.splice($scope.selectedMan.stories.indexOf(story),1);
      $scope.selectedStory = $scope.selectedMan.stories[0];

      $scope.alertMessage = 'Successfully Deleted Story';
      $scope.saveMan();
    }

    $scope.removeImage = function(image, story) {
      story.images.splice(story.images.indexOf(image), 1);

      $scope.alertMessage = 'Successfully Removed Image';
      $scope.saveMan();
    }

    $scope.saveChanges = function() {
      $scope.alertMessage = 'Successfully Saved Changes';
      $scope.saveMan();
    }

    $scope.saveMan = function() {
      DataFactory.updateMan($scope.selectedMan).then(function(response) {
        console.log($scope.selectedMan)
        $scope.showSuccessAlert = true;

        $timeout(function() {
          console.log('time', $scope.showSuccessAlert)
          $scope.showSuccessAlert = false;
        }, 3000)
      })
    }

    $scope.selectMan = function(man) {
      $scope.selectedMan = man;
      $scope.selectedStory = $scope.selectedMan.stories[0];
    }

    $scope.selectStory = function(story) {
      $scope.selectedStory = story;
    }

    $scope.addImageToStory = function(fileName) {
      $scope.selectedStory.images.push('./images/uploads/file-upload-' + fileName);
      $scope.alertMessage = 'Successfully Added Image';
      $scope.saveMan();
      $scope.progress = 0;
      $scope.file = {};
    }

    $scope.uploadFile = function(files) {
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post('/api/images/upload', fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success( console.log('done') ).error( console.log('failed') );

    };

    $scope.submit = function(story){ //function to call on form submit
      console.log('fired')
        if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
            $scope.upload($scope.file, story); //call upload function
        }
    }

    $scope.upload = function (file) {
        Upload.upload({
            url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                console.log(resp.config.data.file)
                $scope.addImageToStory(resp.config.data.file.name);
                // story.images.push()
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) {
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = progressPercentage; // capture upload progress
        });
    };

}
