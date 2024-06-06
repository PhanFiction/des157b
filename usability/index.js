(() => {
  'use strict';

  AOS.init();
  gsap.registerPlugin(ScrollTrigger);

/*   let container = document.querySelector(".slides"),
      slides = gsap.utils.toArray(".slide"),
      getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

  slides.forEach((slide, i) => {
    let bg = slide.querySelector(".background"),
      content = slide.querySelector(".content"),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: () => i ? "top bottom" : "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          duration: 4500,
        }
      });

      tl.fromTo(bg, {
          y: () => i ? -window.innerHeight * getRatio(slide) : 0
        }, {
          y: () => window.innerHeight * (1 - getRatio(slide)),
          ease: "none"
        });
      tl.fromTo(content, {
          y: () => i ? window.innerHeight * -getRatio(slide) * 2 : 0
        }, {
          y: () => window.innerHeight * getRatio(slide) * 2,
          ease: "none"
        }, 0);
  }) */

  let text = gsap.timeline();
  ScrollTrigger.create({
    animation: text,
    trigger: "#scene1",
    start: "top",
    end: "bottom center",
    scrub: true,
    markers: false,
  });

  gsap.from('#text1', {
    x: 0,
    y: -150,
  })

  gsap.from('#text2', {
    x: 0,
    y: 0,
  })

  text.to("#text1", { 
    x: 0,
    y: 150,
  }, 0.5)

  text.to("#text2", { 
    x: 0,
    y: 0,
  }, 0.5)

  let scene1 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene1,
    trigger: "#scene1",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

/*   gsap.from('#text1', {
    x: -350,
    y: 0,
  })

  gsap.from('#text2', {
    x: 350,
    y: 0,
  })

  gsap.from('#text3', {
    x: 350,
    y: 300,
  })

  gsap.from('#text4', {
    x: -350,
    y: 300,
  })

  text.to("#text1", { 
    x: 350, 
    y: 50, 
  }, 0.5)

  text.to("#text2", { 
    x: -350,
    y: 50,
  }, 0.5)

  text.to("#text3", { 
    x: 100, 
    y: 50, 
  }, 0.5)

  text.to("#text4", { 
    x: -100,
    y: 50,
  }, 0.5) */

  ScrollTrigger.create({
    animation: text,
    trigger: "#scene2",
    start: "top",
    end: "bottom center",
    scrub: true,
    markers: false,
  });

  let scene2 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene2,
    trigger: "#scene2",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  let scene3 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene3,
    trigger: "#scene3",
    start: "top top",
    end: "bottom center",
    scrub: true,
    pin: false,
    pinSpacing: false,
  });


  const lenis = new Lenis();

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  
/*   var scene = document.getElementById('scene');
  var scene2 = document.getElementById('scene2');
  var scene3 = document.getElementById('scene3');

  var parallaxInstance;

  function newParallaxScene(scene) {
    parallaxInstance = new Parallax(scene);
  }

  newParallaxScene(scene);
  newParallaxScene(scene2);
  newParallaxScene(scene3); */
})();