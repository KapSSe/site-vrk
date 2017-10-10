/* 
var highlight = {
   
   clickWatch : function (){
      var link = document.querySelectorAll('.menulink')
      console.log(link)      
   },

   init : function(){
      this.clickWatch();
   }
}
 */


$(document).ready(function () {
   $('.menulink').on('click', function(event){
         for(var i = 0;i < $('.sc-menu__menu').length ;i++){
           $('.sc-menu__menu')[i].childNodes[1].style.background = "#c5c5c5";
         }
      $target = $(event.target);
      if(event.target.tagName === "A"){$target.prev().css("background", "black" );}
  });
})
