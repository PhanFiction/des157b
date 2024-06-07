(() => {
  'use strict';

  AOS.init();
  gsap.registerPlugin(ScrollTrigger);

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

  sceneFiveText.fromTo('#bubble-5', 
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
  ).fromTo('#text6', 
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: -35,
      duration: 10,
      ease: Power1.easeInOut,
    }
  ).fromTo('#text7', 
    {
      opacity: 0,
      x: -35,
    },
    {
      y: 100,
      x: -60,
      delay: 10,
      opacity: 1,
      duration: 10,
      ease: Power1.easeInOut,
    }
  )

  let scene5 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene5,
    trigger: "#scene5",
    start: "top",
    end: "+=700",
    scrub: 3,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneFiveText,
    trigger: "#scene5",
    start: "top",
    end: "bottom",
    scrub: true,
    markers: false,
  });


  // Scene 6
  let sceneSixText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneSixText,
    trigger: "#scene6",
    start: "top",
    end: "bottom",
    scrub: 5,
  });

  let sceneSixDialogue = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneSixDialogue,
    trigger: "#scene6",
    start: "top",
    end: "bottom",
    scrub: 5,
  });

  sceneSixDialogue.fromTo('#text8',
    {
      x: -40,
      y: -10,
      opacity: 0,
      duration: 6000 * 5,
    },
    {
      x: 250,
      opacity: 1,
      duration: 6000 * 5,
      ease: Power1.easeInOut,
    }
  ).fromTo('#text9', 
    {
      x: 1500,
      y: 50,
      opacity: 0,
      duration: 6000 * 5,
    },
    {
      x: 1290,
      opacity: 1,
      duration: 6000 * 5,
      ease: Power1.easeInOut,
    }
  )

  sceneSixDialogue.fromTo('#asset1', 
    {
      opacity: 0,
      duration: 6000 * 5,
    },
    {
      opacity: 1,
      duration: 6000 * 5,
      ease: Power1.easeInOut,
    }
  ).set('#asset1', {
    display: 'none',
    duration: 6000 * 5,
    ease: Power1.easeInOut,
  }).fromTo('#asset2', 
    {
      opacity: 0,
      duration: 6000 * 5,
    },
    {
      opacity: 1,
      duration: 6000 * 5,
      ease: Power1.easeInOut,
    }
  ).set('#asset2', {
    display: 'none',
    duration: 6000 * 5,
    ease: Power1.easeInOut,
  }).fromTo('#asset3', 
    {
      opacity: 0,
      duration: 6000 * 5,
    },
    {
      opacity: 1,
      duration: 6000 * 5,
      ease: Power1.easeInOut,
    }
  )

  let scene6 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene6,
    trigger: "#scene6",
    start: "top",
    end: "+=2000",
    scrub: 10,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneSixDialogue,
    trigger: "#scene6",
    start: "top",
    end: "bottom",
    scrub: true,
    markers: false,
  })

  ScrollTrigger.create({
    animation: sceneSixText,
    trigger: "#scene6",
    start: "top",
    end: "bottom",
    scrub: true,
    markers: false,
  });


  // Scene 7
  let sceneSevenText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneSevenText,
    trigger: "#scene7",
    start: "top",
    end: "bottom center",
    scrub: 1,
  });

  sceneSevenText.fromTo('#text10', 
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: -35,
      duration: 10,
      ease: Power1.easeInOut,
    }
  ).fromTo('#text11', 
    {
      opacity: 0,
      x: -35,
    },
    {
      delay: 10,
      opacity: 1,
      y: 100,
      x: -60,
      duration: 10,
      ease: Power1.easeInOut,
    }
  );

  let scene7 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene7,
    trigger: "#scene7",
    start: "top",
    end: "+=1000",
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneSevenText,
    trigger: "#scene7",
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