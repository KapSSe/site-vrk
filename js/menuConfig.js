
navigations = {
   
   getId : function (eventElement) {
      return this.goToAnimated(eventElement.id);
   },

   goToAnimated : function (id) {
      animations.allowAnim = false;
      $.fn.fullpage.setAllowScrolling(false, 'all')
      $.fn.fullpage.moveTo(id);
      animations.callTweenOnEnter(id);
   },
   
   goToContent : function () {
      animations.allowAnim = true;
      $.fn.fullpage.moveSectionDown()
      return this.exit()
   },


   init : function (el) {
      this.toggleOn = true;
      this.getId(el)
   },
   
   exit : function () {
      this.toggleOn = false;
   }
}

