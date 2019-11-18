// Dom7
var $$ = Dom7;


// Init App
var app = new Framework7({
  name : 'Starhugz',
  id: 'com.starhugz.app',
  root: '#app',
  theme: 'auto',
  language: 'en',
  routes: routes
});

var mainView = app.views.create('.view-main', {
  url : './main.html',
  name : 'main',
  iosSwipeBack : false,
  router : true
});

toastMe = function(toastMessage){

    var toastMe = app.toast.create({
    text: toastMessage,
    position: 'bottom',
    closeTimeout: 2000,
  });

    toastMe.open();

}




       

document.addEventListener("deviceready", deviceIsReady, false);



function deviceIsReady(){
  StatusBar.backgroundColorByHexString("#ffffff");

  
   

  

  document.addEventListener("backbutton", function (){
    
    var currentPage = mainView.router.currentRoute.name;
    
    //Re-route to Dashboard
    if(currentPage == "dashboard" || currentPage == "slides" || currentPage == "login"){

        navigator.app.exitApp();
    }
    else{
      
      mainView.router.back({
        ignoreCache : true,
        force : true
      });

    }

}, false);

}




$$(document).on('page:beforein', '.page[data-name="slides"]', function (e){
  StatusBar.hide();
});

$$(document).on('page:afterout', '.page[data-name="slides"]', function (e){
  StatusBar.show();
});
$$(document).on('page:init', '.page[data-name="slides"]', function (e){

  app.swiper.create({
    'el' : '.swiper-container',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
  });
  var swiper = app.swiper.get('.swiper-container');

          $$(".next-btn").on("click", function(){

            swiper.slideNext();

          });

          $$("#get-started-btn").click(function(){
            mainView.router.navigate("/login/");
          });


          

          swiper.on('slideChange', function () {
            
            thisSwipe = swiper.activeIndex;
            switch(thisSwipe){
               case 0 : 
                    $$(".swiper-container").css({
                      "background-image" : "url('imgs/c1.jpg')"
                    });
                    break;

                    case 1 : 
                    $$(".swiper-container").css({
                      "background-image" : "url('imgs/c3.jpg')"
                    });
                    break;

                    default : 
                    $$(".swiper-container").css({
                      "background-image" : "url('imgs/c2.jpg')"
                    });
            }

          });

});









  
$$(document).on('page:init', '.page[data-name="dashboard"]', function (e){

  
  
      var searchbar = app.searchbar.create({
        el: '.searchbar',
        searchContainer : '.search-list',
        searchIn : '.item-title, .item-after'
      });

      $$(".share-btn").click(function(){
        shareApp();
      });

      
});











  
$$(document).on('page:init', '.page[data-name="login"]', function (e){

  StatusBar.backgroundColorByHexString("#0378d2");
  $$("#login-form").submit(function(){
      mainView.router.navigate("/dashboard/");
  });


});

  $$(document).on('page:afterout', '.page[data-name="login"]', function (e){

  StatusBar.backgroundColorByHexString("#ffffff");
   
});








