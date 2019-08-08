console.log("init main");

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