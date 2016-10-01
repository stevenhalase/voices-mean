var app = angular.module('voicesApp', ['ngSanitize']);

app.controller('mainCtrl', mainController);

mainController.$inject = ['$scope', '$http', '$sce'];

function mainController($scope, $http, $sce) {
    $scope.title = 'This title';
    $scope.navOpen = false;
    $scope.posts = [];
    $scope.currentPostID = 1;
    $scope.showCarousel = false;
    $scope.showVideo = false;

    $scope.goTo = function(location) {
        $state.go(location);
        $scope.navOpen = false;
    }

    $scope.openNav = function() {
        if ($scope.navOpen) {
          $scope.navOpen = false;
        } else {
          $scope.navOpen = true;
        }
    }


    $scope.posts = [{
      id : 1,
      video : 'https://www.youtube.com/embed/Hok_E-RrBIQ?rel=0&amp;showinfo=0',
      audio : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/284135701&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false',
      images : ['./images/post2/voices2.jpg',
                './images/post2/voices3.jpg',
                './images/post2/voices4.jpg',
                './images/post2/voices5.jpg',
                './images/post2/voices6.jpg'],
      title : 'Part Two',
      content : `
                <div class="post-body ng-binding" ng-bind-html="post.content.rendered"><div><strong>July 29, 2008</strong><br>
                – At 2 pm we received heavy contact from the east of FB Vegas. I quickly moved to the east fighting position to return fire. I started out not being able to identify enemy forces and started shooting at anything and everything I could see just to keep up the rate of fire and then began scanning slowly. About 150 meters up the hill behind a ‘black shaded rock’ I spotted a combatant moving along the rock wall to find new cover. I quickly lead the target and fired one round into his back and watched him fall directly to the ground. Approx. 5-10 seconds later I was scanning the ‘tooth shaped rock’ about the same distance up the hill but south of the original position. I saw movement in the trees to the right of the rock so I opened with 5 rounds with my M4. Immediately after, I saw the limp body of the man I shot rolling down the hill. I continued engaging him as he rolled but lost sight of his body as he fell behind the far side of the rock. We also took our first casualty today. PFC Decker was on guard at OP Little Rock when we took contact. A round made its way through his fighting position and struck him in the leg. Fortunately, it did not enter his femoral artery and was a clean ‘in and out’ would. About 40 min later he was evac’d out on a chopper and is going to be fine. We took contact again later in the night as well but it was much more brief.</div>
                <div><strong>July 30, 2008</strong><br>
                – We took contact again today, while Icenhower, Sgt. Vogel, and I were filling up sandbags. When the first shots rang out we were perfect targets for snipers out in the open. Luckily we were not shot as we jumped behind cover and ran through enemy fire to get to our equipment. We took contact as 2nd squad was returning from their patrol while I was in the ‘bathroom’. I found it to be extremely annoying as I attempted to pull up my pants while bullets snapped by. Strange experience…. But our outhouse has one hell of a view in that they look out at the Hindu Kush mountains. A priceless view I will always cherish. The third contact we took today happened while I was writing this entry, which really pissed me off. Due to this I am forced to dawn gear and stand guard which just leads to a very prolonged smoke break and sarcastic conversation with my fellow men. Something I’m sure I will come to miss. During this last contact SPC Jeter was able to take out an enemy which his 203 grenade launcher. What a great weapon…. Only surpassed in my opinion by the MK-19. Or has been more formally nicknamed by grunts, the “Fuck everything in this particular vicinity” weapon.</div>
                <div><strong>August 16, 2008</strong><br>
                – Up until this point it has basically been the same routine. Getting shot at and returning fire. We’ve had a few close calls but for the most part every thing has gone pretty smoothly until today. Today about 1 1/2 hours before sundown I was down at OP Little Rock when the first shots rang out that came hard and fast. SPC Sanchez and I moved outside to find out what was going on. Earlier that afternoon down on the road there was an IED that went off and sadly killed SSG Rodgers and inured two others. We had support from 7 or 8 humvees firing 50Cals on the village of Hanuk Bandi. (A place laced with terraces of marijuana at just the right time of year. A beautiful place destroyed by 2000 bombs, yet these beautiful plants remain in this aesthetically flawless valley. I also made a sniper Ghillie suit out of cannabis plants, to my PLT SGT’s skeptical surprise.) We began calling for 120 mm mortars/air support when I heard over the radio that Flemate had been hit. I headed up to OP Rock about 20 meters up a steep hill where I came across Flemate. He had been bandaged up by SSG Dubious but was in a lot of pain. After I got there he started to become disoriented so I began hitting his helmet to revive him, which worked. I decided to distract him with comedy by asking him to say over the radio that “he wants his free license plates for life, immediately.” A few min later doc arrived and was able to give Flemate 2 shots of morphine which fixed him up real good. I remember the fear inside that room not knowing the severity of his condition. He has one hell of a sense of humor so I’m sure that served him well. (He is now a badass MMA fighter in CA.)That night we continued with the largest barrage of artillery and mortars I’ve ever seen, which was nothing but awe inspiring. The sky lit up for hours. A sort of middle finger to the enemy in my opinion. During this firefight, FB Vegas was continually spotting enemy from 150 meters away, to as close as 35 meters from the wire…. But were able to hold them back. Selman was also struck in the helmet but luckily enough, it was deflected.</div>
                <div>Wanted to shout out to&nbsp;<a class="profileLink" href="https://www.facebook.com/ricardo.flemate">Ricardo Flemate</a>&nbsp;and&nbsp;<a class="profileLink" href="https://www.facebook.com/chris.vogel.758">Chris Vogel</a>&nbsp;with the photos below. Thank you for everything and glad you continue to prosper!</div>
                </div>
                `
    },{
      id : 2,
      video : 'https://www.youtube.com/embed/9XXcPLmGii0?rel=0&amp;showinfo=0',
      audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275150973&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false',
      images : ['./images/post1/voices1.jpg'],
      title: 'Part One',
      content : `<div>I am going to tell my story after finding a couple journal entries from my time overseas.</div>
                  <div>If I am fortunate enough that you read them, please keep in mind that these were written by an 18 year old who didn’t know shit about shit.</div>
                  <div class="text_exposed_show">
                  <div>Please take it at face value, ignore it, or feel free to add to it my fellow Viper Family. There is no goal in this but to simply express personal experience. I apologize in advance if any of the content offends others. There will be a serious of journal entries released over the next 4 days. There are many other stories I have to tell but these were the only ones I cared to write down for whatever reason.</div>
                  <div>If you are a fellow veteran and find this of interest, please send me your journal entries so I can add them to potential future series. Welp… Here goes nothing:</div>
                  <div><strong>July 12, 2008</strong></div>
                  <div>– “Arrived in Manas air force base in Kyrgyzstan and plan on staying three days”</div>
                  <div><strong>July 15, 2008</strong><br>
                  – “Leaving Manas and heading to Bagram, Afghanistan”</div>
                  <div><strong>July 16, 2008</strong><br>
                  – “Received classes on countering IED’s which was a waste of time. I figure ill be in bagram till the 18th. I want to leave here as soon as possible and get to firebase vegas.”</div>
                  <div><strong>July 21, 2008</strong><br>
                  – “I arrived at FB vegas to relieve the 173rd after 15 months of being stationed their. Took no contact upon arrival. Damn these guys look rough…”</div>
                  <div><strong>July 26, 2008</strong><br>
                  – “Had my first firefight while at OP Rock. Attack began at approx. 8:30am. Could not spot any enemy forces because they concealed themselves in the trees and behind rocks very well. (CIB Day)</div>
                  </div>
                `
    }]

    $scope.goTo = function(postID) {
      $scope.currentPostID = postID;
      $scope.navOpen = false;
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

    $scope.closeSplash = function(section) {
      console.log('closing')
      var $scene = $('#scene').parallax();
      $scene.parallax('disable');
      $('#main-scene').hide();
    }


    $(document).ready(function() {

      for (var i = 0; i < $scope.posts.length; i++) {
        var selector = '#carousel-' + ($scope.posts[i].id);
        // console.log(($scope.posts[i].id*10) + 1)
        $(selector).carousel()
      };

      $('html').click(function(event){
      //   console.log(event.target.className)
        if (event.target.className == 'side-nav-backer side-nav-backer--open') {
          // console.log('backer', iCtrl.navOpen)
          $scope.navOpen = false;
          $scope.$apply();
        }
      });

      $('#main-scene').parallax();
    })
}
