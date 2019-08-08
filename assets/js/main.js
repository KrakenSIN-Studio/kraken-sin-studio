document.addEventListener("DOMContentLoaded", function() {
    /// WOW Init
    new WOW().init();

  /// Progression Bar
  function progressionBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progression-bar").style.width = scrolled + "%";
  }
  
  /// Hide Social Media
  var prevScrollpos = window.pageYOffset;
  function hideSocialMedia(){
      
      var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("side-social").style.left = "10px";
    } else {
      document.getElementById("side-social").style.left = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
  
  window.onscroll = function() {
      progressionBar();
      hideSocialMedia()
  }
  
  /// show more games
  var buttonMoreGames = document.querySelector("#btn-more-games");
  buttonMoreGames.addEventListener("click", function(){
    document.querySelector('#more-games').style.display = "flex";
  });

    /////////////////////////////////////////////
    ///            VUE JS
    //////////////////////////////////////////////
    var games = new Vue({
      el : '#main-games' ,
      data : {
          games : [
              {   title : 'One Room Game',
                  description : 'Project made with GameMakerStudio 2. Run and Gun type game .It\'s a Web Game, Mouse & keyboard is needed to play.',
                  url : 'https://monsieurkraken.itch.io/eyes-shooter',
                  imageUrl : "./assets/images/coming-soon.jpg",
                  tech : "GameMaker Studio 2"
              },
              {   title : 'Super Cactus & Mammuth',
                  description : 'Project made with GODOT ENGINE. Platformer type game. It\'s a Web Game, Mouse & keyboard is needed to play.',
                  url : 'https://monsieurkraken.itch.io/prototype-globalgamejam2018',
                  imageUrl : "./assets/images/c&m.jpg",
                  tech : "GODOT ENGINE"
              }
          ]
      },
  });

    var moreGames = new Vue({
      el : '#more-games' ,
      data : {
          games : [
              {   title : 'Eye Shooter',
                  description : 'Project made with GameMakerStudio 1.4 in 3 Days. It\'s a Windows Game. Mouse is needed to play.',
                  url : 'https://monsieurkraken.itch.io/eyes-shooter',
                  imageUrl : "./assets/images/eyes_shooter.gif",
                  tech : "GameMaker Studio 1.4"
              },
              {   title : 'Transmission - GameJam',
                  description : 'GlobalGameJam 2018\'s prototype made with GameMakerStudio 2 in 48h.  It\'s a Windows Game. Mouse is needed to play.',
                  url : 'https://monsieurkraken.itch.io/prototype-globalgamejam2018',
                  imageUrl : "./assets/images/transmission.gif",
                  tech : "GameMaker Studio 2"
              }
          ]
      },
  });

})
