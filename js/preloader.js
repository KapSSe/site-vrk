
var img = document.images;
var imgTotalCount = img.length;
var imgReadyCount = 0;
var domEl = document.querySelector('.loader')
var domEl2 = document.querySelector('.preloader__bar')

for(var i = 0; i < imgTotalCount; i++){
   imgClone = new Image();
   imgClone.onload  = imgLoaded;
   imgClone.onerror = imgLoaded;
   imgClone.src = img[i].src;
}

function imgLoaded() {
  imgReadyCount++;
     domEl.style.opacity = (0 + ((1 / imgTotalCount) * imgReadyCount));
     domEl2.style.width = (0 + ((100 / imgTotalCount) * imgReadyCount)) + "vw";
  if(imgReadyCount >= imgTotalCount){
   domEl2.style.opacity = 0;
     setTimeout(function(){
        var preloader = document.querySelector('.preloader');
        if(!preloader.classList.contains('done')){
           preloader.classList.add('done');
        }
     }, 1000)
  }
}