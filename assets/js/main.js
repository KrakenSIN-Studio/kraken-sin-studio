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
      document.getElementById("side-social").style.left = "30px";
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
    buttonMoreGames.style.display = "none";
  });

  /////////////////////////////////////////////
  ///            VUE JS
  //////////////////////////////////////////////
  var games = new Vue({
      el : '#main-games' ,
      data : {
        games : [
          {   
            title : 'One Room Game',
            description : 'Project made with GameMakerStudio 2. Run and Gun type game .It\'s a Web Game, Mouse & keyboard is needed to play.',
            url : 'https://monsieurkraken.itch.io/eyes-shooter',
            imageUrl : "./assets/images/coming-soon.jpg",
            tech : "GameMaker Studio 2",
            release : false
          },
          {   
            title : 'Super Cactus & Mammuth',
            description : 'Project made with GODOT ENGINE. Platformer type game. It\'s a Web Game, Mouse & keyboard is needed to play.',
            url : 'https://monsieurkraken.itch.io/prototype-globalgamejam2018',
            imageUrl : "./assets/images/c&m.jpg",
            tech : "GODOT ENGINE",
            release : false
          }
        ]
      },
  });

  var moreGames = new Vue({
      el : '#more-games' ,
      data : {
        games : [
          {   
            title : 'Eye Shooter',
            description : 'Project made with GameMakerStudio 1.4 in 3 Days. It\'s a Windows Game. Mouse is needed to play.',
            url : 'https://monsieurkraken.itch.io/eyes-shooter',
            imageUrl : "./assets/images/eyes_shooter.gif",
            tech : "GameMaker Studio 1.4",
            release :  true,
          },
          {   
            title : 'Transmission - GameJam',
            description : 'GlobalGameJam 2018\'s prototype made with GameMakerStudio 2.  It\'s a Windows Prototype. Mouse is needed to play.',
            url : 'https://monsieurkraken.itch.io/prototype-globalgamejam2018',
            imageUrl : "./assets/images/transmission.gif",
            tech : "GameMaker Studio 2",
            release : true
          }
        ]
      },
  });


  /////////////////////////////
  /// SCROLL TO JS NATIF
  /////////////////////////////
  (function() {
    scrollTo();
  })();
  
  function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
  }
  
  function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = '-1';
        targetAnchor.focus();
        window.history.pushState('', '', targetID);
        clearInterval(checkIfDone);
      }
    }, 100);
  }

})
