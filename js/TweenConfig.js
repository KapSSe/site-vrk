    
   animations  = {
      
      domElements : {
            //DOM SELECTORS
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /* Sc-report */
            scWelcomeLineLg: document.querySelectorAll(".sc-welcome .sc-welcome__line--lg"),
            scWelcomeLineSm:document.querySelectorAll(".sc-welcome__line--sm"),
            scWelcomeW1: document.querySelectorAll(".sc-welcome__words--lg1"),
            scWelcomeW2: document.querySelectorAll(".sc-welcome__words--lg2"),
            scWelcomeW3: document.querySelectorAll(".sc-welcome__words--md1"),
            scWelcomeW4: document.querySelectorAll(".sc-welcome__words--md2"),
            scWelcomeW5: document.querySelectorAll(".sc-welcome__words--md3"),
            scWelcomeMain: document.querySelectorAll(".sc-welcome__logo"),
            
            /* Sc-number*/
            scPart1OfYear: document.getElementById("one"),
            scPart2OfYear: document.getElementById("six"),
            scMenuYear: document.querySelector(".flex__number"),
            scMenuLinks1: document.querySelectorAll(".stage1"),
            scMenuLinks2: document.querySelectorAll(".stage2"),
            scMenuLinks3: document.querySelectorAll(".stage3"),
            scMenuLinkLines: document.querySelectorAll(".sc-welcome__line--bold"),
            scMenuLines: document.querySelectorAll(".sc-menu .sc-welcome__line--lg"),

            /* Vagon 1*/
            scVagon1Wire: document.querySelector('.sc-vagon--1 .sc-vagon__train--wireframe'),
            scVagon1Color: document.querySelector('.sc-vagon--1 .sc-vagon__train--colored'),
            scVagon1Numbers: document.querySelector('.sc-vagon--1 .sc-vagon__train--number'),
            scVagon1Cran: document.querySelector('.sc-vagon--1 .sc-vagon__crans--cran'),
            scVagon1Telegka: document.querySelector('.sc-vagon--1 .sc-vagon__crans--telegka'),
            scVagon1Rails: document.querySelector('.sc-vagon--1 .sc-vagon__rails'),
            scVagon1: document.querySelector('.sc-vagon--1'),

            /* Vagon 2*/
            scVagon2Wire: document.querySelector('.sc-vagon--2 .sc-vagon__train--wireframe'),
            scVagon2Color: document.querySelector('.sc-vagon--2 .sc-vagon__train--colored'),
            scVagon2Depot: document.querySelector('.sc-vagon--2 .sc-vagon__train--depot'),
            scVagon2: document.querySelector('.sc-vagon--2'),

            /* Vagon 3*/
            scVagon3Wire: document.querySelector('.sc-vagon--3 .sc-vagon__train--wireframe'),
            scVagon3Color: document.querySelector('.sc-vagon--3 .sc-vagon__train--colored'),
            scVagon3Cran: document.querySelector('.sc-vagon--3 .sc-vagon__train--cran'),
            scVagon3: document.querySelector('.sc-vagon--3'),

            /* Vagon 4*/
            scVagon4Wire: document.querySelector('.sc-vagon--4 .sc-vagon__train--wireframe'),
            scVagon4Color: document.querySelector('.sc-vagon--4 .sc-vagon__train--colored'),
            scVagon4Schema: document.querySelector('.sc-vagon--4 .sc-vagon__schema'),
            scVagon4: document.querySelector('.sc-vagon--4'),

            /* Vagon 5*/
            scVagon5Wire: document.querySelector('.sc-vagon--5 .sc-vagon__train--wireframe'),
            scVagon5Color: document.querySelector('.sc-vagon--5 .sc-vagon__train--colored'),
            scVagon5Schema: document.querySelectorAll('.sc-vagon--5 .sc-vagon__schema'),
            scVagon5: document.querySelector('.sc-vagon--5'),

            /* Vagon 6 */
            scVagon6Wire: document.querySelector('.sc-vagon--6 .sc-vagon__train--wireframe'),
            scVagon6Color: document.querySelector('.sc-vagon--6 .sc-vagon__train--colored'),
            scVagon6Rails: document.querySelector('.sc-vagon--6 .sc-vagon__rails'),
            scVagon6Schema: document.querySelector('.sc-vagon--6 .sc-vagon__schema'),
            scVagon6: document.querySelector('.sc-vagon--6'),
            
            /* Vagon 7 */
            scVagon7Wire: document.querySelector('.sc-vagon--7 .sc-vagon__train--wireframe'),
            scVagon7Color: document.querySelector('.sc-vagon--7 .sc-vagon__train--colored'),
            scVagon7Rails: document.querySelector('.sc-vagon--7 .sc-vagon__rails'),
            scVagon7Schema: document.querySelector('.sc-vagon--7 .sc-vagon__schema'),
            scVagon7: document.querySelector('.sc-vagon--7'),

            /* Content */

            scContent: document.querySelectorAll('.section'),

            /* Vagons */
            scVagon: document.querySelectorAll('.sc-vagon'),

            /* Footer */
            scFooter: document.querySelector('.sc-foot'),
    },


    //ENTRY ANIMATIONS
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tweenMainPageEntry : function () {
        var firstScreenTimeline = new TimelineLite({onComplete: function(){$.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()}}});
            firstScreenTimeline.from(animations.domElements.scWelcomeLineSm, 0.35, { x: -500 })
            firstScreenTimeline.from(animations.domElements.scWelcomeW1, 0.5, {x:-500})
            firstScreenTimeline.from(animations.domElements.scWelcomeW2, 0.5, {x:-500}, '-=0.15')
            firstScreenTimeline.from(animations.domElements.scWelcomeW3, 0.5, {x:-500}, '-=0.25')
            firstScreenTimeline.from(animations.domElements.scWelcomeW4, 0.5, {x:-500}, '-=0.25')
            firstScreenTimeline.from(animations.domElements.scWelcomeW5, 0.5, {x:-500}, '-=0.35')
            firstScreenTimeline.from(animations.domElements.scWelcomeLineLg, 0.5, {width: '5%', marginLeft: '50%'}, '-=1')
            firstScreenTimeline.from(animations.domElements.scWelcomeMain, 0.75, {opacity: 0, scale: 1.4}, '-=0.5')
    },

    tweenSecondPageEntry : function () {
        var secondScreenTimeline = new TimelineLite({ onComplete: function () { $.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if (navigations.toggleOn) { animations.setAllowTransition() } } });
        secondScreenTimeline.to(animations.domElements.scMenuYear, 0, { opacity: 1 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
        secondScreenTimeline.to(animations.domElements.scMenuLinks1, 0, { opacity: 1 });
        
        secondScreenTimeline.to(animations.domElements.scMenuLinks2, 0, { opacity: 1 });

        secondScreenTimeline.to(animations.domElements.scMenuLinks3, 0, { opacity: 1 });

        secondScreenTimeline.to(animations.domElements.scMenuLinkLines, 0, { width: "100%" });
        secondScreenTimeline.to(animations.domElements.scMenuLines, 0, { width: "100%" });
        




            secondScreenTimeline.from(animations.domElements.scPart1OfYear, 0.5, { opacity: 0, y: -600 }, 0).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
            secondScreenTimeline.from(animations.domElements.scPart2OfYear, 0.5, {opacity: 0, y: -50, rotation: 30}, 0)
    },


    tweenThirdPageEntry: function () {
        var secondScreenTimeline = new TimelineLite({ onComplete: function () { $.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()} } });
            secondScreenTimeline.to(animations.domElements.scVagon1, 0, { opacity: 1 });
            secondScreenTimeline.from(animations.domElements.scVagon1Rails, 0.5, { x: -500, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
            secondScreenTimeline.from(animations.domElements.scVagon1Wire, 1.5, { x: -500, opacity: 0 });
            secondScreenTimeline.from(animations.domElements.scVagon1Cran, 1.7, { x: -500, opacity: 0 }, "-=0.5");
            secondScreenTimeline.from(animations.domElements.scVagon1Telegka, 1.7, { x: -400, opacity: 0 }, '-=0.7');
            secondScreenTimeline.from(animations.domElements.scVagon1Color, 1, { opacity: 0 });
            secondScreenTimeline.from(animations.domElements.scVagon1Numbers, 1, { opacity: 0, scale: 1.2 });
            
    },

      
    tweenForthPageEntry : function(){
        var forthScreenTimeline = new TimelineLite({ onComplete: function () { $.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()} } });
        forthScreenTimeline.to(animations.domElements.scVagon2, 0, { opacity: 1 });
        forthScreenTimeline.from(animations.domElements.scVagon2Depot, 1.5, { x: -400, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
        forthScreenTimeline.fromTo(animations.domElements.scVagon2Wire, 2, { x: 1000, opacity: 0 }, { x: -450, opacity: 1 }, '-=1.2');
        forthScreenTimeline.to(animations.domElements.scVagon2Wire, 1, { x: 0 }, '+=0.4');
        forthScreenTimeline.fromTo(animations.domElements.scVagon2Color, 1, { opacity: 0, x: -400 }, { opacity: 1, x: 0 }, '-=1');
    },

    tweenFifthPageEntry : function (){
        var fifthScreenTimeline = new TimelineLite({ onComplete: function () { $.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()} } });
        fifthScreenTimeline.to(animations.domElements.scVagon3, 0, { opacity: 1 });
        fifthScreenTimeline.from(animations.domElements.scVagon3Cran, 1, { x: -400, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
        fifthScreenTimeline.from(animations.domElements.scVagon3Wire, 1, { x: -500, opacity: 0 });
        fifthScreenTimeline.from(animations.domElements.scVagon3Color, 1.5, { scale: 1.2, opacity: 0});
    },

    tweenSixthPageEntry : function (){
        var sixthScreenTimeline = new TimelineLite({onComplete: function(){$.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()}}});
        sixthScreenTimeline.to(animations.domElements.scVagon4, 0, { opacity: 1 });
        sixthScreenTimeline.from(animations.domElements.scVagon4Wire, 1.5, { x: -400, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
        sixthScreenTimeline.from(animations.domElements.scVagon4Color, 1.5, { scale: 1.2, opacity: 0 });
        sixthScreenTimeline.from(animations.domElements.scVagon4Schema, 1, { x: 500, opacity: 0 });
    },

    tweenSeventhPageEntry: function () {
        var seventhScreenTimeline = new TimelineLite({onComplete: function(){$.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()}}});
        seventhScreenTimeline.to(animations.domElements.scVagon5, 0, { opacity: 1 });
        seventhScreenTimeline.from(animations.domElements.scVagon5Wire, 1.5, { x: -400, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
            seventhScreenTimeline.from(animations.domElements.scVagon5Color, 1.5, {scale: 1.2, opacity: 0});

        for (var i = 0; i < animations.domElements.scVagon5Schema.length; i++) {
            seventhScreenTimeline.from(animations.domElements.scVagon5Schema[i], 0.3, {scale: 1.2, opacity: 0});
        }
    },

    tweenEightPageEntry: function () {
        var nineScreenTimeLine = new TimelineLite({onComplete: function(){$.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()}}});
            nineScreenTimeLine.to(animations.domElements.scVagon6, 0, { opacity: 1 });
            nineScreenTimeLine.from(animations.domElements.scVagon6Rails, 1, { x: -500, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
            nineScreenTimeLine.from(animations.domElements.scVagon6Wire, 1.5, {x: -400, opacity: 0});
            nineScreenTimeLine.from(animations.domElements.scVagon6Color, 1.5, {scale: 1.2, opacity: 0});
            nineScreenTimeLine.from(animations.domElements.scVagon6Schema, 1, {x: 500, opacity: 0});
    },

    tweenNinePageEntry: function () {
        var nineScreenTimeLine = new TimelineLite({onComplete: function(){$.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()}}});
            nineScreenTimeLine.to(animations.domElements.scVagon7, 0, { opacity: 1 });
            nineScreenTimeLine.from(animations.domElements.scVagon7Rails, 1, { x: -500, opacity: 0 }).to(animations.domElements.scFooter, 0.2, { opacity: 1 });
            nineScreenTimeLine.from(animations.domElements.scVagon7Wire, 1.5, {x: -400, opacity: 0});
            nineScreenTimeLine.from(animations.domElements.scVagon7Color, 1.5, {scale: 1.2, opacity: 0});
            nineScreenTimeLine.from(animations.domElements.scVagon7Schema, 1, {x: 500, opacity: 0});
    },

    tweenContentEntry: function () {
        var contentTimeLine = new TimelineLite({ onComplete: function () { $.fn.fullpage.setAllowScrolling(true, 'all');if(!(animations.isScrollable)){animations.moveTo()} ; if(navigations.toggleOn){animations.setAllowTransition()} } });
        contentTimeLine.to(animations.domElements.scFooter, 0.2, { opacity: 0 }).from(animations.domElements.scContent, 1, { opacity: 0 });
    },


    
    //OUT ANIMATINOS
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tweenSecondPageOut: function () {
        var secondScreenTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        secondScreenTimeLineOut.to(animations.domElements.scMenuYear, 1, { opacity: 0 })
        for (var i = 0; i < animations.domElements.scMenuLinks1.length; i++) {
            secondScreenTimeLineOut.to(animations.domElements.scMenuLinks1[i], 0.1, { opacity: 0 });
        }
        for (var i = 0; i < animations.domElements.scMenuLinks2.length; i++) {
            secondScreenTimeLineOut.to(animations.domElements.scMenuLinks2[i], 0.1, { opacity: 0 });
        }
        for (var i = 0; i < animations.domElements.scMenuLinks3.length; i++) {
            secondScreenTimeLineOut.to(animations.domElements.scMenuLinks3[i], 0.1, { opacity: 0 });
        }
        secondScreenTimeLineOut.to(animations.domElements.scMenuLinkLines, 0.3, { width: 0 }, "+=0.2");
        secondScreenTimeLineOut.to(animations.domElements.scMenuLines, 0.1, { width: 0 });
    },

    tweenFirstTrainOut: function () {
        var firstTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        firstTrainTimeLineOut.fromTo(animations.domElements.scVagon1, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenSecondTrainOut: function () {
        var secondTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        secondTrainTimeLineOut.fromTo(animations.domElements.scVagon2, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenThirdTrainOut: function () {
        var thirdTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        thirdTrainTimeLineOut.fromTo(animations.domElements.scVagon3, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenForthTrainOut: function () {
        var forthTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        forthTrainTimeLineOut.fromTo(animations.domElements.scVagon4, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenFifthTrainOut: function () {
        var fifthTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        fifthTrainTimeLineOut.fromTo(animations.domElements.scVagon5, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenSixthTrainOut: function () {
        var sixthTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        sixthTrainTimeLineOut.fromTo(animations.domElements.scVagon6, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenSeventhTrainOut: function () {
        var seventhTrainTimeLineOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
        seventhTrainTimeLineOut.fromTo(animations.domElements.scVagon7, 0.5, { opacity: 1 }, { opacity: 0 });
    },

    tweenContentOut: function () {
        var contentOut = new TimelineLite({ onComplete: function () { animations.isAnimEnded = true; animations.moveTo() } });
    },
    
    
    // TO SET AUTOSCROLL WHEN NOT SCROLLABLE SECTIONS ANIMATIONS
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    disableAutoTransitionSections: ['mainPage','menuPage','firstContent','secondContent','thirdContent','forthContent','fifthContent','sixthContent','seventhContent'],

    
    //TWEEN CALL FROM SCROLL CONFIG
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    callTweenOnEnter: function (index) {
        return new enterAnimations[index];
    },


    callTweenOnLeave: function (index, direction) {
        animations.direction = direction;
        return new outAnimations[index];
    },

    moveTo: function () {
        animations.direction === "up" ? $.fn.fullpage.moveSectionUp() : $.fn.fullpage.moveSectionDown();
    },

    allowAnim : true,

    setAllowTransition: function () {
        return navigations.goToContent();
    },

}


   //ANIMATIONS LIBRARY 
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
     enterAnimations = {
        2 : animations.tweenSecondPageEntry,
        3 : animations.tweenThirdPageEntry, //1 �����
        4 : animations.tweenContentEntry,
        5: animations.tweenEightPageEntry, //2 �����
        6 : animations.tweenContentEntry,
        7: animations.tweenNinePageEntry, //3 �����
        8 : animations.tweenContentEntry,
        9: animations.tweenForthPageEntry,
        10 : animations.tweenContentEntry,
        11: animations.tweenFifthPageEntry,
        12 : animations.tweenContentEntry,
        13: animations.tweenSixthPageEntry,
        14 : animations.tweenContentEntry,
        15: animations.tweenSeventhPageEntry,
        16 : animations.tweenContentEntry
    }

   outAnimations = {
       2: animations.tweenSecondPageOut,
       3: animations.tweenFirstTrainOut, //1 �����
       4: animations.tweenContentOut,
       5: animations.tweenSixthTrainOut, //2 �����
       6: animations.tweenContentOut,
       7: animations.tweenSeventhTrainOut, //3 �����
       8: animations.tweenContentOut,
       9: animations.tweenSecondTrainOut,
       10: animations.tweenContentOut,
       11: animations.tweenThirdTrainOut,
       12: animations.tweenContentOut,
       13: animations.tweenForthTrainOut,
       14: animations.tweenContentOut,
       15: animations.tweenFifthTrainOut,
       16: animations.tweenContentOut
    }