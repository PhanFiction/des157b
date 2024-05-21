(() => {
  'use strict';

  AOS.init();
  
  var scene = document.getElementById('scene');
  var scene2 = document.getElementById('scene2');
  var scene3 = document.getElementById('scene3');

  var parallaxInstance;

  function newParallaxScene(scene) {
    parallaxInstance = new Parallax(scene);
  }

  newParallaxScene(scene);
  newParallaxScene(scene2);
  newParallaxScene(scene3);
})();