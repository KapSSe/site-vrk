if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   document.write( 
         '<script src="js/TweenLite.min.js"></script>'
       )
   }else{
      document.write( 
         '<script src="js/TweenLite.min.js"></script>' +
         '<script src="js/TimelineLite.min.js"></script>' +
         '<script src="js/CSSPlugin.min.js"></script>' +
         '<script src="js/TweenConfig.js"></script>' +
         '<script src="js/jquery.fullpage.extensions.min.js"></script>' +
         '<script src="js/scrolloverflow.js"></script>' +
         '<script src="js/jquery.fullPage.js"></script>' +
         '<script src="js/scrollConfig.js"></script>' +
         '<script src="js/menuConfig.js"></script>'
     )
   }