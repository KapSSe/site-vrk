$(document).ready(function () {

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors: ['mainPage', 'menuPage', 'firstTrain', 'firstContent', 'secondTrain', 'secondContent', 'thirdTrain', 'thirdContent', 'forthTrain', 'forthContent', 'fifthTrain', 'fifthContent', 'sixthTrain', 'sixthContent', 'seventhTrain', 'seventhTrain'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        flag: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 0,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 0,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor: '#fff',
        paddingTop: null,
        paddingBottom: null,
        fixedElements: '.sc-header, .sc-foot',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,
		//events

        onLeave: function (index, nextIndex, direction) {
			if (animations.allowAnim & index > 1){
				var doneFlag = animations.isAnimEnded;
				doneFlag === true ? updateStatus(doneFlag) : callAnimation(index);
				function callAnimation(index) {
					var dir = direction;
					$.fn.fullpage.setAllowScrolling(false, 'all')
					animations.callTweenOnLeave(index, dir);
					return doneFlag;
				}
				function updateStatus(doneFlag) {
					return doneFlag;
				}
				return doneFlag;
            }
            
        },

        afterLoad: function (anchorLink, index) {
			if(animations.allowAnim){
				animations.isAnimEnded = false;
				var flag = document.querySelectorAll('.section');
				if (index > 1) {
					$.fn.fullpage.setAllowScrolling(false, 'all')
					animations.callTweenOnEnter(index);
                };
                if(index === 1){
                    $.fn.fullpage.setAllowScrolling(true, 'all')
                }
			}
        },


        afterRender: function () {
            var pluginContainer = $(this);
            $.fn.fullpage.setAllowScrolling(false, 'all')
            animations.tweenMainPageEntry();
        },
	});
	
	$(document).on('click', '.sc-header__menu-btn', function(){
        if(!navigations.toggleOn || navigations.toggleOn === undefined){
            animations.allowAnim = false;
            $.fn.fullpage.moveTo(2);
            animations.callTweenOnEnter(2);
            return animations.allowAnim = true;
        }else{
            return false;
        }
    });
    
    $(document).on('click', '.sc-menu__link', function(e){
        var el = e.target;
            return navigations.init(el);
    });

    $(document).on('click', '.tomainpage', function(){
        if(!navigations.toggleOn || navigations.toggleOn === undefined){
            animations.allowAnim = false;
            $.fn.fullpage.moveTo(1);
            $.fn.fullpage.setAllowScrolling(true, 'all')
            return animations.allowAnim = true;
        }else{
            return false;
        }
    });
});