window.onload = function(){
   indicate = {
      
      compareSection : function (currentUrl){

         var domTab = document.querySelector('.tabindicator');
         var domBtn = document.querySelector('.sc-header__menu-btn');

         Array.prototype.contains = function (currentUrl) {
            for (i in this) {
               if (lib.sectionsLib[i] == currentUrl) return true;
               }
         return false;
         }

      
       
        lib.sectionsLib.contains(currentUrl)? this.writeTab(currentUrl, domTab, domBtn): this.end(currentUrl, domTab, domBtn);
      },
      
      writeTab : function (currentUrl, domTab, domBtn) {
         if(currentUrl != 'mainPage' || currentUrl === undefined){
            domTab.classList.remove('tabindicator--hide');
            domTab.innerHTML = lib.sectionsTab[lib.sectionsLib.indexOf(currentUrl) - 1];
         }
         domBtn.classList.remove('sc-header__menu-btn--inactive')
      },

      init : function () {
         var currentUrl = document.URL.split('#')[1];
         this.compareSection(currentUrl)
      },

      end : function (currentUrl, domTab, domBtn) {
         if(currentUrl != undefined){
         domTab.classList.add('tabindicator--hide')
         domBtn.classList.add('sc-header__menu-btn--inactive')
         }
         return;
      }
   }

   lib = {
      sectionsLib : ['mainPage','firstContent','secondContent','thirdContent','forthContent','fifthContent','sixthContent','seventhContent'],
      sectionsTab: ['Краткие итоги работы АО «ВРК‑1» в 2016 году ','Стратегия и инвестиционная политика АО «ВРК‑1»','Анализ операционных результатов АО «ВРК‑1»','Анализ финансовых результатов АО «ВРК‑1»','Корпоративное управление АО «ВРК‑1»','Устойчивое развитие АО «ВРК‑1»','Приложения'],
   }
} 