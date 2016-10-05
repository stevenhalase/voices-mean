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

    $scope.openNav = function() {
        if ($scope.navOpen) {
          $scope.navOpen = false;
        } else {
          $scope.navOpen = true;
        }
    }

    $scope.theMenHover = false;
    $scope.theMenSelected = false;
    $scope.selectedStory = false;
    $scope.selectedGalleryImage = false;
    $scope.galleryStory = false;

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

      $('.header-title').affix({
        offset: {
          top: 50
        }
      });	

    })

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

    $scope.theMen = [{
      id: 1,
      firstName: 'Mikel',
      lastName: 'Drnec',
      unit: '3rd Plt, Viper Company',
      img: './images/themen/drnec.jpg',
      video : 'https://www.youtube.com/embed/9XXcPLmGii0?rel=0&amp;showinfo=0',
      audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275150973&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false',
      images : ['./images/post1/voices1.jpg'],
      stories : [{
        id: 1,
        title: 'Part One',
        images: ['./images/themen/drnec/partone-1.jpg','./images/themen/drnec/partone-2.jpg','./images/themen/drnec/partone-3.jpg'],
        content: 
                `
                <p> Four legged heroes:</p><p> Today I want to pay homage to our 4 legged friends who did more for my personal morale than any care package ever could. These animals were unlike any I've seen in the civilian world and continue to be the reason why I've never adopted a pup or kitten since leaving the military, as no pet could ever live up to the loyalty, trust, and kinship that these animals provided under the worst circumstances possible. We originally started out with two dogs, Champ and Suzie. Champ was brought over to Firebase Vegas from the KOP after almost being killed by a soldier of the 173rd Airborne (our predecessors). One soldier with a good heart took him onto a chinook helicopter bound for Firebase Vegas while he was still a pup, saving his life. Suzie was the original dog that had been at Firebase Vegas for as long anyone could remember. Suzie and Champ bonded almost immediately and soon formed a close relationship that resulted in a litter of eight new pups.</p><p> Champ and Suzie were present for every patrol we went on overseas. They always led the way. Our caretakers, our recon unit so to speak. They always alerted us to people nearby while we were in defensive positions or simply walking through our patrols. It gave us all a great deal of comfort to know that they were watching out for us. We treated them as equals and today I still feel that they are. Sometimes I wonder if I would have made it through this deployment mentally without the kinship of Champ, Suzie, and JJ.</p><p> Champ was the Alpha dog of the group. While Suzie preferred to remain inside the base when no patrols were being conducted. Champ guarded the front door day and night, diligent in his duty to protect his companions. Each night, while on guard, Champ could be heard on the LZ battling fiercely amongst the seemingly endless wild dogs found throughout the Korengal. However, Champ always maintained the upper hand. Whereas most animals were malnourished and underfed, Champ ate like a king. Soldiers would constantly share their meals with him. I remember one scenario where the cook made a particularly disgusting sausage breakfast plate. No soldier could stomach it, but Champ was more than willing to eat each and every one of the meals provided by all thirty men in the platoon. This gave him an obvious upper hand and sealed his place as the alpha dog of the Korengal Valley. Each night as I sat in south tower I would hear Champ fighting off other dogs trying to enter the base in search of food. It was not uncommon for Champ to bring back "souvenirs" each morning i.e. the remains of other dogs and humans. He was my best friend out there. I would spend hours each night in the southern guard tower listening to his scuffles before he would join me at my side and sit diligently listening for intruders but also mainly entertaining my many mindless conversations in order to pass the time stuck alone in the dark. Nobody wants to die alone and to have him with me made me feel I never would. One of my worst memories of my deployment was the day special forces arrived at FB Vegas in order to enjoy the combat experience our "home" provided us. The next day, as a joke, one of the "men" attempted to kill Champ by shooting him directly through the chest with an M4. It was a through and through, clean in and out shot. This made me furious as he was my most special companion, always looked out for us and displayed nothing but love and loyalty towards the men of 3rd Platoon. The special forces soldiers thought this was hilarious and paid no mind. This is what solidified my lack of respect for these men who were supposedly the "cream of the crop"; the best of the best. They are forever tarnished in my eyes. Fortunately due to Doc Evans, who treated him as he would any other soldier who had been wounded. Champs wounds were cleaned, wrapped, and he was given a small dose of morphine for pain. After this he retreated underneath the B-huts refusing to let anyone come near him for nearly two weeks. Everyday I would spend hours at the entry to his "hidey-hole" bringing him water and food. I did everything I could to entice him to rejoin the platoon. Slowly but surely his trust in the platoon returned and before long he was back in business, guiding us throughout the Hindu Kush Mountains once again. He still has not received his purple heart...</p><p> At first Suzie was a great and loyal patrol dog who found a home at FB Vegas. After giving birth to eight pups her personality took a turn for the worse. Suddenly, Suzie was extremely defensive of her pups and became temperamental toward many of the men. However, Suzie maintained a pleasant attitude toward me as I spent hours helping her nurse and nurture her new pups. She always trusted me and I always trusted her; a bond she shared with few others. One day an order came down the pipeline that 10 dogs were 8 dogs too many for such a small base. I brought the idea to the leadership that we could release them to the locals but fear of them returning was a major deterrent in the leaderships' decision. There was nothing I could do... I was told they would all be killed. I was sure there was no one present cruel enough to perform the task and that an alternative solution would be provided. I was wrong. I felt helpless to stop it. To make the best of a horrible situation, I named the only brown dog of the litter J.J. (Our platoon SGT's nickname) In the hope that this kind of approach would appeal to the goodness in him and at least one could be spared. I finally wore him down and he agreed to keep J.J. However, the others met a much more cruel fate. Out of nowhere, I was ordered to attend guard at South Tower as not to be aware of what was about to happen. I looked down from the tower and saw 4 of my fellow soldiers carrying the pups in a locked box. One by one, they were all removed and killed with a shot gun blast to the head. I remember the look on one of the soldiers faces as he walked out to perform this evil act. He looked broken, sad, defenseless in what he was ordered to carry out. I however, would never have followed such an order. It would not be something I could live with....</p><p> However, life went on. I still had J.J. to take care of. I took him on as one would a personal pet. I took him with me to OP Rock in my ammo pouch, he was so small. The cutest thing I've ever seen. He slept in my bed, urinated in my sleeping bag, as well as frequently defecated on the prayer rug of the Afghani interpreter in the room next to me. This become a common occurrence as he would only find out after bowing in prayer... I was told that J.J. could no longer sleep in my quarters but I thought screw that. I built the interpreter a small hut outside away from the rest of the group in order to ensure J.J.'s future security and our companionship. I was frequently referred to as a "Dick" but it didn't bother me one iota. I still had my J.J. </p><p> Unlike most pet owners, I never had the sad experience of watching my pets age and pass on. These dogs are immortal in my mind. They will forever wander the Hindu Kush mountains. That is what I tell myself every day and it brings me solace. They were the Canine Saints of the Korengal Valley. They were there to balance out the evil of that place and to remind us that there was still good in the world. They never let me forget it and for that I am forever grateful. I place Champ among the ranks of famous dogs such as Balto or Buck. An infamous hero always and forever.</p>
                `
      },{
        id: 2,
        title: 'Part Two',
        images: ['./images/themen/drnec/parttwo-1.jpg','./images/themen/drnec/parttwo-2.jpg','./images/themen/drnec/parttwo-3.jpg'],
        content: `
                <p> November 2, 2008<br> Today I returned to FB Vegas on the Pesch resupply from the KOP. I wasn’t back 10 minutes before our apache escorts opened fire on what they believed to be Taliban fighters. It turned out to be our Afghan National Army soldiers bathing near our Firebase. I ran down there to give what aid I could but when I got there I arrived at a scene of chaos. The ANA were shuttling in the wounded. Some priority and some urgent surgical. Most of them were covered in blood. We began giving aid to the wounded and I noticed one of the ANA soldiers tracking the Apache helicopter with an RPG, about to fire...</p><p>  We told him not to fire as he was screaming at us and the pilot of the helicopter. Suddenly the ANA started to turn their attention towards us and began pointing their weapons at us. At that point I thought it was going to be a blood bath. An 'O.K. Corral' situation. The tension kept rising. (It wasn't until later I was told OP Rock was ordered to orient their 50Cal machine gun toward the ANA compound inside FB Vegas where I was standing) As all this was  was going on, one of our own ANA opened fire with his AK47 at the Apache in anger. Another grabbed an RPG. SSG Dubious grabbed the barrel of the first ANA soldier's gun and took it away (Almost getting himself shot in the process. Three words, balls of steel). Due to losing another medic, I was made the temporary medic for patrols. I took a few combat life saving courses at Fort Hood. I felt confident in my ability to treat patients but was panicking due to the combination of having so many patients to treat at once and feeling so much tension between our two armies. (Anger that was certainly deserved)I went to the first patient. I could see brain cartilage off the left side of his head as well as massive portions of flesh missing from his upper and lower legs. Mott assisted me which gave me more confidence and is more responsible for saving that man's life. We got the injured on the Medevac birds and waited for an ANA uprising against us. It could come at any minute we were told. </p><p> "Dawn your gear and prepare."</p><p> January 17, 2009</p><p> Today, a Chinook (CH-47) chopper was coming in to resupply our company. They took heavy contact from multiple directions. As they were inbound for FB Vegas they took a direct hit from a Russian shoulder fired missile. It went straight through the hull of the chopper. The Chinook quickly turned towards FB Vegas and prepared for an emergency landing outside our wire. At the time I was at OP Little Rock. Elevation wise I was even with the bird. I just watched a member of the flight crew looking through the gaping hole as smoke billowed out. I wonder if we saw each other...? I could do nothing but share their panic and fear. We had some of our own on that bird. SPC Jeter (who was at FB for his second deployment and was on that bird to head out for his mid-tour leave) He didn't come back. None of us blame him. We all respect the 20 months he spent in this hell hole. He deserves to go home. They slammed into the ground and the bird went up in flames. Everyone escaped with minor wounds accept SPC Dawson who died right where he sat. That night we pulled guard on his body. An indescribable smell. RIP.  He was the only other soldier in the company from Las Vegas. I did not know him but felt an immediate kinship. We've come from the same place. I feel like one of us was always meant to go. I'm sorry to say it wasn't me. </p><p> January 22, 2009<br> LOSING MY FUCKING MIND ONCE AGAIN!!!!!!!!!!!!!! FUCK THE ARMY, FUCK THE KORENGAL! DAMN THE VALLEY!!!!</p><p> Its only once we’ve lost everything, that we’re free to do anything…….</p><p> END SCRIPT</p><p> P.S.<br> From this point I stopped writing a journal. I began relying on Hashish for comfort and no longer wanted to remember what happened. I wanted to close my mind to the world. I stopped having fear. I welcomed death. I couldn't see the light at the end of the tunnel, so to speak. I scratched at the walls and complained constantly. In retrospect I am ashamed of my behavior to this day but hey... I was 18. What the Fuck did I know.....</p>
                `
      }]
    },{
      id: 2,
      firstName: 'Rob',
      lastName: 'Soto',
      unit: '2nd Plt, Viper Company',
      img: './images/themen/soto.jpg',
      video : 'https://www.youtube.com/embed/9XXcPLmGii0?rel=0&amp;showinfo=0',
      audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275150973&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false',
      images : ['./images/post1/voices1.jpg'],
      stories : [{
        id: 1,
        title: 'Part One',
        images: ['./images/themen/soto/partone-1.jpg'],
        content: 
                `
                <p> "It's okay to cry, I mean, I've gone through some horrible shit, but the difference is, you gotta understand, that it isn't forever"</p><p>  <a class="profileLink" href="https://www.facebook.com/RobBDB23" data-hovercard="/ajax/hovercard/user.php?id=801127715">Robbie Soto</a> is a proud New Yorker. At a young age he watched his father work hard just to stay afloat. From birth Rob lived with his grandmother, who had immigrated to the United States from Puerto Rico in the 1960's. Along with his grandmother, he credits his aunt with shaping him into the man he is today. His aunt taught him manners and<span class="text_exposed_hide">...</span><span class="text_exposed_show"> respect, while his grandmother was his "rock". With the help of these two women, he turned into an optimistic, easy-going, intelligent man, who is always willing to help others.</span></p><div class="text_exposed_show"><p> In the seventh grade he was in school when he received word of a terrorist attack on the World Trade Center. His grandmother immigrated to America to bring a better life to her kin and now new fears were being created right outside her grandson's front door. This in part, inspired him to join the Army.</p><p> "We're at war, who am I to let other people go and not go myself?"</p><p> To speak of Robbie Soto is to be his friend. To know him is to be inspired. To have fought along side him was to know you were truly in the presence of a brother. A brother who had your back without thinking of his own. To know him now as we delve into his journey, you too will understand the strength and character that Rob Soto embodies.</p>
                `
      },{
        id: 2,
        title: 'Part Two',
        images: ['./images/themen/soto/parttwo-1.jpg'],
        content: 
                `
                <p> "I had to do what I had to do, but the man still has a family... somewhere.”</p><p> In 2008, Robbie Soto was sent to the Korengal Out Post (KOP). He was a rifleman who spent his free time talking with friends, working out, and listening to music that ranged from Nas to Nirvana. Working out became a favorite past time as it was a way for him to feel stronger than the enemy. As a rifleman, at the KOP, one of his jobs was to go out on frequent patrols of the Korengal road. (A one way road with one way in and one way out) They originally conducted these patrols in vehicles but they frequently broke down and were ill suited to the terrain. This posed problems for them as enemies would sit and wait alongside the road for the trucks to stop. They eventually quit using vehicles and instead began conducting foot patrols. Soto found these to be preferable to the alternative. While the trucks showed force, the foot patrols were more effective. </p><p> On September 20th, 2008, Soto's platoon sergeant, SFC Wright, ordered him to go to OP Dallas for AVAC training. (OP dallas is a small outpost a short way from the KOP) Soto was unhappy about this decision as he wanted to go out on the patrol that night as he usually did with SSG Nathan Cox and PVT Joseph Gonzales. (He usually sat directly behind SSG Cox) SSG Cox was a good friend of Soto's. He was a man "you always wanted to be around." A man who was frequently reading and writing. A well educated, enlisted Infantryman. A rare combination. In fact, Soto bought SSG Cox a book for his birthday that fell on September 30th, 10 days after this patrol would come to an end. It's a gift that Soto was never able to give SSG Cox and sits to this day in his closet, still wrapped. On that day of September the 20th, an IED (Improvised explosive device) was triggered by the Humvee Cox and Gonzo were riding in. This greatly impacted Soto when he heard about it. To this day, September is still a hard month for him due to the high number of casualties Viper company sustained. Later he would look back on this moment and feel something akin to survivors guilt. Doc Keith Aaron Young had gone in Soto's place on that patrol and was wounded in the explosion. Soto could not help but feel he should have been in the Humvee that day.</p><p> “At 17 I met a bunch of badass dudes, some not so badass, you know. But anywhere you go you’re gonna meet guys that are great and then you’re gonna meet people that aren’t, thats just normal.”</p><p> Soto was good friends with SPC Marques Knight. The two men formed a bond and a brotherhood that can only be found in a situation like they found themselves in; combat. While on a foot patrol on September 6th, 2008, in support of 1st PLT, bullets started raining down on <a class="profileLink" href="https://www.facebook.com/MarquesIKnight" data-hovercard="/ajax/hovercard/user.php?id=1368671863">Marques Irving Knight</a> and his fellow men. It was following this ambush that Knight was rushed back to the KOP and prepped in the mechanics bay. This moment still effects him today. It is on this day, September the 6th 2016, eight years after SPC Knight's passing that we wish to remember what a great person he was, how much light and inspiration he brought to the many men he knew and affected.  </p><p> Robbie says it best: </p><p> "Days like today when I start to really zone out, and start to think about the exact day Knight passed, I could easily tell you what the air smelled like, how hard the rain/hail began to fall, and the photo instilled forever in my mind of his body, both outside and then inside of a zipped up, black body bag; an image that can define his memory in my heart and mind, but is one I refuse to ever identify with. Instead, I remember Knight as a leader that held standards that I would go on to strive to emulate. Knight's style, talent, smile, and voice are what I remember him by, and how I will describe him to my children, if I'm blessed to have some one day. I'll tell them 'This is what true greatness looks like; this is a man who made your dad who he is.'"</p>
                `
      },{
        id: 3,
        title: 'Part Three',
        images: ['./images/themen/soto/partthree-1.jpg'],
        content: 
                `
                <p> "April 10th, 2009"</p><p> It was just before sundown that Robbie Soto set out on what he thought would be a routine patrol up the Sautalu Sar spur when the lead scout, SGT Zachary Reese, radioed in that the enemy they had seen evidence of on the trail was coming. It was a patrol the men had done plenty of times; a draining hike that required Soto to stay proficient in his training as the enemy always kept eyes on them during patrols. Soto thought this would be just like many other patrols, in that nothing would come of it. However, when SGT Reese counted twenty-six enemy gunmen coming down the trail, Soto realized his training would finally be put to use. He was positioned on the left side of the trail, facing north, with PFC Molano, who he describes as "one of the hardest working soldiers I've served with." They had just been commanded by their platoon leader, LT Smith, to form a textbook L-shaped ambush along the trail. After what seemed like minutes, Soto watched through his night vision goggles as enemy gunmen walked slowly along the trail towards them. The Taliban showed qualities of a ragged group of guys. "Everything we're not supposed to do, they we're doing," Soto says. They had their guns slung over their shoulders and were walking closely together. It was the click of a private's rifle being set from safety to semi that alerted the first enemy gunman. After that, LT Smith ordered the men to fire while a claymore mine was detonated simultaneously. </p><p> "I mean, it just happened."</p><p> A chaotic and crazy scene broke out. The enemy combatants were unprepared for the attack and a lot were shot and killed instantly. Others ran into a ditch that was directly in front of Soto and were quickly taken out. Soto heard orders being yelled and ammunition stock being counted. A soldier nearby Soto was hit by some rocks. Soto ran over to make sure the soldier was okay. He was then grabbed, along with some others, to clear the kill zone. It was "an ambush that worked 100% in our favor," Soto says. All of this chaos lasted only a few minutes. It was only once he had crossed the gate into the KOP that he says he felt safe, however. Bodies were documented, weapons and ammunition were accounted for, but it's the images and senses he saw and felt that left the wound that day. While 2nd PLT, Viper Company, sustained zero wounded or dead that day, Soto remembers seeing a pair of shoes on the ground that an enemy had been blown out of. He remembers the cold feeling of the blood on the enemy ammo pouches. It was a day his training had finally been tested and he had succeeded. It wouldn't be until a few days later that a casualty would be sustained on our side. PFC Richard Dewater was conducting another foot patrol that day, with Soto and some other men, when an IED was set off. Soto and the men stayed out until one A.M. looking for the remains of PFC Dewater. It was a sad and tragic day for all the men. A sobering reminder that the valley was not always safe.</p><p> (Photo Credit: NY Times)</p><p> (NY Times article on the ambush)<br> <a href="http://l.facebook.com/l.php?u=http%3A%2F%2Fwww.nytimes.com%2F2009%2F04%2F17%2Fworld%2Fasia%2F17afghan.html%3F_r%3D0&amp;h=iAQGiBObEAQFj2o3AnV-SNNRWY2XwG8wxxz4K2WtWHIcoVQ&amp;enc=AZOv0U0M3tOnkYfNmosvH4lWBKUGuQZ0t_SRXBWpC4oWC-etGS4WlTn2x6kaS0INArq-19NHdbP7xuCIY3_ml71w9RaLs9Do31kRlBR1a_4fhB4hdeDcb0_8PzDu6KFRv3SEq8sVTkBHOjPtYkRGVgqKrmYxcTKJgrkh23vrJilhO1nY395VfRNbeNLBjLjcvWBMA1sksct_1geYyarOJEov&amp;s=1" target="_blank" rel="nofollow" onmouseover="LinkshimAsyncLink.swap(this, &quot;http:\/\/www.nytimes.com\/2009\/04\/17\/world\/asia\/17afghan.html?_r=0&quot;);" onclick="LinkshimAsyncLink.referrer_log(this, &quot;http:\/\/www.nytimes.com\/2009\/04\/17\/world\/asia\/17afghan.html?_r=0&quot;, &quot;\/si\/ajax\/l\/render_linkshim_log\/?u=http\u00253A\u00252F\u00252Fwww.nytimes.com\u00252F2009\u00252F04\u00252F17\u00252Fworld\u00252Fasia\u00252F17afghan.html\u00253F_r\u00253D0&amp;h=iAQGiBObEAQFj2o3AnV-SNNRWY2XwG8wxxz4K2WtWHIcoVQ&amp;render_verification=0&amp;enc=AZOv0U0M3tOnkYfNmosvH4lWBKUGuQZ0t_SRXBWpC4oWC-etGS4WlTn2x6kaS0INArq-19NHdbP7xuCIY3_ml71w9RaLs9Do31kRlBR1a_4fhB4hdeDcb0_8PzDu6KFRv3SEq8sVTkBHOjPtYkRGVgqKrmYxcTKJgrkh23vrJilhO1nY395VfRNbeNLBjLjcvWBMA1sksct_1geYyarOJEov&amp;d&quot;);">http://www.nytimes.com/2009/04/17/world/asia/17afghan.html…</a></p>
                `
      }]
    },{
      id: 3,
      firstName: 'John',
      lastName: 'Rodriguez',
      unit: 'HQ / 3rd Plt, Viper Company',
      img: './images/themen/rodriguez.jpg',
      video : 'https://www.youtube.com/embed/9XXcPLmGii0?rel=0&amp;showinfo=0',
      audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275150973&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false',
      images : ['./images/post1/voices1.jpg'],
      stories : [{
        id: 1,
        title: 'Part One',
        images: ['./images/themen/rodriguez/partone-1.jpg'],
        content: 
                `
                <p> Lieutenant John Rodriguez was born near Gettysburg, Pennsylvania. He wanted to join the military as early as middle school. John's father, a college professor, respected his son's ambition. He only requested that his son attend college first in order to serve as an officer. John attended Mount St. Mary's, a small college in Maryland and graduated in 2006 with a dual major in History and English. Inspired by his love of history (In particular WWII) and his devotion to hi<span class="text_exposed_hide">...</span><span class="text_exposed_show">s country, John was the perfect person to lead men, young and old. As 3rd PLT's LT, John was one of the first to deploy to Afghanistan and the last to leave as the company's XO. Through his journal and his willingness to discuss his experience, we hope to provide everyone with a technical outline of what occurred in the Valley. Most Importantly, we wish to give light to an incredibly brave American. </span></p><div class="text_exposed_show"><p> John Rodriguez is a soft spoken man. From a civilian standpoint, it is hard to imagine him as an Infantry officer and a platoon leader. However, if you were to ask anyone who served with John, they would set the record straight quite quickly. Behind his soft voice and polite demeanor is a man many Korengal Valley veterans have to thank for making it home. LT John Rodriguez admired the men he served with. Each man, wounded or killed, left him with a feeling of responsibility; even when there was nothing he could have done differently. He is an intelligent and dedicated human being who could control chaos without considering his own safety, only that of his men. John was close to the men of 3rd PLT. However, like any great leader, he still believed in keeping his guard as to not express his deeper concerns. The men understood John and joked with him frequently. </p><p> On July 10th, John left Ft. Hood and departed for Afghanistan. He was young. Much younger than the squad leaders and many of the men he was in charge of. After a month of being in the valley, his age was questioned. John quickly set things straight and became known as perhaps the most competent leader in 3rd PLT. John was a leader who cared much for the men. But after 3 months at Firebase Vegas, he was transferred to the Korengal Outpost (KOP) so that LT Newkirk could get his line time. (An age old military tradition) He felt he was abandoning his men. He would prefer to stay with the men he trained, the men he trusted. But such is life in the Army. He found his replacement, LT Newkirk, to be a good and competent leader. LT John Rodriguez was a leader who felt a sense of responsibility with every casualty sustained in the valley. He wanted to see every soldier he led return to their family. John arrived in the Korengal, prepared and idealistic about the effect Viper Company could have on the Valley. He was trained in the rules and regulations of the United States Army. By the end of the deployment, he was a leader who only believed in his men.</p>
                `
      },{
        id: 2,
        title: 'Part Two',
        images: ['./images/themen/rodriguez/parttwo-1.jpg','./images/themen/rodriguez/parttwo-2.jpg','./images/themen/rodriguez/parttwo-3.jpg'],
        content: `
                <p> On July 13th, 2008. John Rodriguez arrived at Bagram Airfield. While there he encountered men from the 173rd Airborne (Our predecessors) who recounted a single firefight they had participated in which resulted in nine dead and dozens wounded in what came to be known as the 'Battle of Wanat’. He attended briefings that he felt were not suited or tailored toward combat troops. He sincerely wished they were. Certainly, the men running the briefings had no idea what it meant to be a combat infantryman. </p><p> On July 17th, John finally boarded a Chinook bound for Firebase Vegas. En route he met one of the ETT’s (Marine ANA attachments) stationed at FB Vegas. He had been peppered by rocks after an IED was detonated in the town of Chical and was heading back. They rode into the valley together. It was the first time the platoon had been hit by an IED while walking on the trail. John was impressed by the firebase when he arrived. Especially the amenities available to the men and the local workers provided to the platoon. Not long after his arrival at Vegas, Viper company took contact south of the KOP. The company returned fire with 155mm mortar rounds and called in an A-10 Warthog to subdue the enemy. During the night (A time the AAF rarely engaged the base) OP Rock was attacked by enemy RPG’s and PKM’s. Their position was close. The enemy entered the outer perimeter and attacked Vegas from the Pool House (A small structure just outside the walls of the base). John noticed the men of the 173rd Airborne react quickly and was quite impressed. </p><p> On July 19th, John went on a patrol to Chichal. He was meticulous and forthright about the rules he noticed his soldiers were disobeying. He witnessed men with their ACOG’s and NVG’s not properly tied down. (An army standard to avoid losing expensive equipment) The following day he took a patrol to Khanek Bandi and discovered multiple potential enemy fighting positions with a clear line of sight to Firebase Vegas. It was a reminder of why the men must wear their body armor while inside the wire. </p><p> On July 21st, John received a batch of new men. By the next day these men concerned him. After witnessing two soldiers walk through the hesco walls to urinate, he found exposed weaknesses in the base’s fortifications. It was clear these men were not taking the severity of the situation seriously, a troubling thought to a platoon leader. On the 23rd, John attended a Shura (Weekly meeting with village elders) where he met a local teacher from Chical that he would later form a bond with named Bismullah. (He can be seen in white in the photo below at the far left) During the shura, the locals expressed gratitude for the army’s presence because they voiced it brought security to the area. Above all else, they wanted to ensure their villages would not be turned into battlefields. </p><p> On the 24th, John began to understand how difficult the terrain of the valley was to traverse. He noticed the impact it had on his men. He witnessed soldiers vomiting and struggling to climb the steep hills. The soldiers were still adapting to the altitude. The sweltering heat did not help. John decided the next patrol would take place at night under the cover of darkness. He moved a team to Karim’s Village. (A village directly up the mountain from FB Vegas) The next day John lead his first patrol without the assistance of the 173rd Airborne. Their time in the valley was up and John quickly began cleaning up the mess left behind. We fixed the generator and worked on communication security, among other tasks. </p><p> On July 26th, the men of the 173rd Airborne were waiting to catch the final bird out of Vegas when enemy RPG and small arms fire erupted. The men jumped into action and quickly gained fire superiority. During the fight, SFC Martinez had become pinned down on the LZ. 240B gunners from weapons squad moved into position after running through oncoming fire to provide support. SPC Kane was only 10 meters from a mortar round that struck near him. It was a day of close calls. The fight resulted in 1 EKIA and 3 EWIA. (Enemy KIA, Enemy WIA) Later, on a patrol to Karim’s village, 3rd PLT spotted a grouping of water bottles with copper wiring inside that was not there previously. This signaled enemy AAF had been in the area. In the following moments the men of the patrol believed they spotted a person nearby. But the game of cat and mouse had just began. </p><p> On July 29th, John left Khanek Bandeh with some of 3rd PLT. They left at 2300 Zulu. The patrol arrived in Khanek Bandeh just as the sun was coming up. After searching the village they proceeded to an area known as Pyramid Rock which contained structures that one could not see from FB Vegas. Later the patrol pushed down to mortar rock and discovered a distinct AAF (Anti-Afghanistan Forces) fighting position, but unfortunately did not find any weapon caches. Although, they did discover as they strolled through an area rightfully named ‘Mortar Rock’, that it had been decimated by Coalition mortars and artillery. Later in the day, the CO ordered John to take a team of men to the KOP. John originally planned to move out at 1000 hours but changed it to 1100. Hindsight 20/20, this was a stroke of luck given the enemy attacked at 1000 hours with small arms fire from EA Silverback and Khanek Bandeh. His men responded with small arms fire and 60mm mortars. OP Rock was blasting away with the MK-19 and M2 machine gun. John also called in 120mm and 155mm mortar rounds on known enemy positions. When a hog element was called in the company lost its indirect fire support. The A-10 Warthog’s hit a structure in SW Khanek Bandeh and another structure NE of the first target’s position. It was during this attack that PFC Decker was hit while scanning for enemy targets at OP Little Rock. He had been shot through his leg. The bullet went through and through. Fortunately, the bullet missed his femoral artery. PFC Decker began crawling up the steep hill toward OP Rock when Loughney saw him. He helped carry him the rest of the way. Decker was moved to the geographical saddle located between OP Rock and FB Vegas. LT Rodriguez then took charge of the ‘DUSTOFF’ procedure. Decker appeared alert when John first saw him and was able to hobble to the bird when it arrived to transport him to Jalalabad for further treatment.  Soon, John received word that Decker would recover. John became angry, however, when the first question posed to him following the event was whether or not Decker was clean shaven and properly wearing his uniform.</p>
                `
      }]
    },{
      id: 3,
      firstName: 'John',
      lastName: 'Kane',
      unit: '3rd Plt, Viper Company',
      img: './images/themen/kane.jpg',
      video : 'https://www.youtube.com/embed/9XXcPLmGii0?rel=0&amp;showinfo=0',
      audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275150973&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false',
      images : ['./images/post1/voices1.jpg'],
      stories : [{
        id: 1,
        title: 'Part One',
        images: ['./images/themen/kane/partone-1.jpg'],
        content: 
                `
                <p> “I had a few problems adjusting, but you have to get out there, you have to go, you have to be around people, you have to find someway to be involved in something.”</p><p>  Jonathan Kane is a thirty-three year old veteran from Worcester, Massachusetts. At the age of twenty-three, he decided to enlist in the Army infantry.  In Jon’s mind, it was no grand gesture of patriotism or heroism, but was for reasons most men enlist; he wanted to be apart of something. After boot camp, J<span class="text_exposed_hide">...</span><span class="text_exposed_show">on was assigned to Bravo Company, 1/26, eventually becoming 3rd platoon’s RTO (radio telephone operator). Before Jon deployed, he had many adventures across Texas, many of which were fueled by his love of the drink. He was known to blare Rage Against the Machine late into the night and early into the morning, to the exasperation of his roommate and neighbors. He was known for finding himself in precarious situations. However, his friends always made sure to pay him back in kind for his menacingly, enthusiastic, nightly party routine. Suffice it to say, he spent a great deal of time in front of the commander for his 'extra-curricular' activities. </span></p><div class="text_exposed_show"><p> However, it was easy for Jon to transition to the life of a deployed soldier. His fellow platoon members were impressed by his transformative behavior and he soon became viewed as one the of the most competent men of 3rd Platoon. He became a great soldier. You might even have read some of his actions recounted by other soldiers in previous stories, but this week we will be telling his story from his perspective. A man who was always good for a laugh and a good time. A guy who came out of deployment as whole as any one could. A man who had access to information before other soldiers were privy to it due to his position. He was a soldier, like many, who was unprepared for the experiences he would face, but was mentally strong enough to overcome them.</p>
                `
      },{
        id: 2,
        title: 'Part Two',
        images: ['./images/themen/kane/parttwo-1.jpg'],
        content: `
                <p> "I remember thinking, fuck, I can't get wrecked on day zero and started shooting my 203..."</p><p> Soon after basic training, Jon was asked by his platoon sergeant if he would be interested in attending RTO school. Jon was quite excited about the opportunity to take on such an important role. He spent a great deal of time in Texas training and communicating with helicopters, mortars units, and participating in company wide exercises in preparation for deployment. He credits a soldier, SGT Montgomery, with giving him many of the skills that prepared him for the position. These experiences and others gave Jon a feeling of confidence for what he was about to do. Like most soldiers throughout training, Kane always held the lingering question in his mind of how he would perform his duties under fire. "It was an assumed risk I took", said Jon. Looking back, he feels that a lot of his confidence stemmed from the man next to him, LT. John Rodriguez. If things turned ugly, he knew the LT would be there to take over. He also credits the company commander with preparing the RTO's with the knowledge they would need for the deployment ahead. Jon also learned tactical maneuvering by covertly sneaking ten pound rocks into the platoon leader's ruck sack before garrison marches. </p><p> After making the journey to Firebase Vegas, he remembers "sleeping like a baby" that first night after 30 hours without sleep waiting at the flight line at Jalalabad. Jon tried to keep an open mind. After being lead into the TOC (Vegas HQ) by one of the squad leaders, SSG Gradick, he would find himself immediately tested. The former RTO of the 173rd Airborne (Viper CO's predecessors) was leaving the very next day and it was up to Jon to absorb as much knowledge as possible in less than 24 hours. He was essentially thrown a book of maps and grids and told "good luck." This played heavy on Jon's mind throughout the deployment as he thought of ways to leave the next RTO more prepared. He was always working to improve what little equipment was available in the TOC. He spent time searching for any spare parts off of used equipment he could use to give himself and the platoon additional resources. Upon his arrival, the communications system was simply made up of two radios that ran on batteries. It would be his mission to change this. Apart from these tasks, he would need to memorize maps mentally, know where to scan for targets, and "where to direct the pain" if the soldiers got hit while on patrol or inside of Vegas. He would become acquainted with the SPOP, an unreliable satellite "that battalion would call me about while I was in a fucking ambush or on patrol." An annoyance that would become a great burden to the Company CO. It was a simple issue to fix, only requiring a reset, but the SPOP always seemed to go down as soon as the platoon would take fire, adding a great deal of stress to the job. </p><p> His second day at firebase Vegas, the birds departed the landing zone to take the men of the 173rd away as Vegas took enemy contact. Due to the poor communication systems at the time, Jon was forced to put himself in harm's way to spot targets on the hillside. It was during this firefight that "either a recoilless round or rocket" hit the hesco Jon was standing feet behind. He began shooting his 203 grenade launcher, a weapon he preferred to have on him as it was more efficient for targeting dead space and signaling fires. He preferred his M14 during the day as it was better for ambushes. Immediately following the firefight, SFC Martinez ordered an AAR (After action report). AAR's are meetings conducted following enemy engagements, missions, or general patrols. The platoon discussed what occurred and how to improve upon it in the future. While this wasn't his last firefight by any means, it certainly left an impression on Jon. From that day forward, he was always trying to give the men what they needed communication's wise. He did whatever he could to make process's more logical and simpler when fighting would break out. However, the impression the 173rd RTO he replaced still stands out vividly to Jon. "He looked like shit", he thought, referring to his tattered attire and worn out look after spending fifteen months at firebase Vegas. It wouldn't be long before Jon would feel the effect of the valley, himself.</p>
                `
      }]
    }]
}
