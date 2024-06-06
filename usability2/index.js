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

  const SPEED = 2;

  // Scene 1
  let scene1 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene1,
    trigger: "#scene1",
    start: "top top",
    end: 'bottom center',
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  // Scene 2
  let sceneTwoText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneTwoText,
    trigger: "#scene2",
    start: "top",
    end: "bottom center",
    scrub: 1,
  });

  sceneTwoText.fromTo('#text1',
    {
      ease: Power1.easeInOut,
      delay: 3,
      duration: 10,
      y: -50 * SPEED,
      duration: 10,
      opacity: 0,
    },
    {
      y: -20, 
      duration: 10,
      opacity: 1,
    }
  )
  
  sceneTwoText.fromTo('#text2', 
    {
      opacity: 0,
      ease: Power1.easeInOut,
      delay: 3,
      duration: 10,
      y: -50 * SPEED,
    },
    {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 3,
      duration: 10,
      y: 70,
    }
  )

  let scene2 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene2,
    trigger: "#scene2",
    start: "top",
    end: "+=1100",
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneTwoText,
    trigger: "#scene2",
    start: "top",
    end: "bottom",
    scrub: true,
    markers: false,
  });


  // Scene 3
  let sceneThreeText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneThreeText,
    trigger: "#scene3",
    start: "top",
    end: "bottom center",
    scrub: 1,
  });

  sceneThreeText.fromTo('#text3', 
    {
      delay: 3,
      x: 0,
      opacity: 1,
      duration: 10,
    },
    {
      ease: Power1.easeInOut,
      delay: 3,
      x: -100,
      opacity: 0,
      duration: 10,
    }
  )

  sceneThreeText.fromTo('#text4', 
    {
      x: 100,
      opacity: 0,
      duration: 10,
      ease: Power1.easeInOut,
    },
    {
      x: 0,
      opacity: 1,
      duration: 10,
      delay: 0.01,
    }
  )

  sceneThreeText.fromTo('#bubble-3', 
    {
      opacity: 0,
      duration: 10,
      ease: Power1.easeInOut,
    },
    {
      opacity: 1,
      duration: 10,
    },
  )

  let scene3 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene3,
    trigger: "#scene3",
    start: "top",
    end: "+=1000",
    scrub: 5,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneThreeText,
    trigger: "#scene3",
    start: "top",
    end: "bottom",
    scrub: true,
    markers: false,
  });


  // Scene 4
  let sceneFourText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneFourText,
    trigger: "#scene4",
    start: "top",
    end: "bottom center",
    scrub: 1,
  });

  sceneFourText.fromTo('#bubble-4', 
    {
      delay: 3,
      opacity: 0,
      duration: 5,
    },
    {
      ease: Power1.easeInOut,
      opacity: 1,
      duration: 5,
    }
  )

  sceneFourText.fromTo('#text5', 
    {
      delay: 3,
      x: 0,
      opacity: 1,
      duration: 5,
    },
    {
      ease: Power1.easeInOut,
      delay: 3,
      x: -100,
      opacity: 0,
      duration: 5,
    }
  ).fromTo('#photo6', 
    {
      x: 100,
      opacity: 0,
      duration: 5,
      ease: Power1.easeInOut,
    },
    {
      x: 0,
      opacity: 1,
      duration: 5,
      delay: 0.01,
    }
  )

  let scene4 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene4,
    trigger: "#scene4",
    start: "top",
    end: "+=700",
    scrub: 3,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneFourText,
    trigger: "#scene4",
    start: "top",
    end: "bottom center",
    scrub: true,
    markers: false,
  });


  // Scene 5
  let sceneFiveText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneFiveText,
    trigger: "#scene5",
    start: "top",
    end: "bottom center",
    scrub: 1,
  });

sceneFiveText.fromTo('#text6', 
  {
    opacity: 0,
    duration: 3,
    delay: 3,
    x: -1000,
  },
  {
    opacity: 1,
    x: 10,
    duration: 3,
  }
)

let scene5 = gsap.timeline();
ScrollTrigger.create({
  animation: scene5,
  trigger: "#scene5",
  start: "top",
  end: "+=1000",
  scrub: true,
  pin: true,
  pinSpacing: true,
});

ScrollTrigger.create({
  animation: sceneFiveText,
  trigger: "#scene5",
  start: "top",
  end: "bottom center",
  scrub: true,
  markers: false,
});



  const lenis = new Lenis();

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();