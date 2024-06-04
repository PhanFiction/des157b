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
    trigger: ".text-box",
    start: "top",
    end: "bottom",
    scrub: false,
    markers: false,
    toggleActions: 'play onLeave onEnterBack onLeaveBack',
  });

  sceneTwoText.from('#text1', {
    opacity: 0,
    duration: 3,
  })

  sceneTwoText.to('#text1', {
    opacity: 1,
    duration: 3,
  })
  
  sceneTwoText.from('#text2', {
    opacity: 0,
    duration: 9,
    delay: 1000 * 5000,
  })
  
  sceneTwoText.to('#text2', {
    opacity: 1,
    duration: 9,
  })

  let scene2 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene2,
    trigger: "#scene2",
    start: "top top",
    end: "+=700",
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneTwoText,
    trigger: "#scene2",
    start: "top",
    end: "bottom center",
    scrub: true,
    markers: false,
  });


  // Scene 3
  let sceneThreeText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneThreeText,
    trigger: ".text-box",
    start: "top",
    end: "bottom center",
    scrub: false,
    markers: false,
    toggleActions: 'play onLeave onEnterBack onLeaveBack',
  });

  sceneThreeText.fromTo('#text3', 
    {
      opacity: 0,
      duration: 3,
      delay: 0.5,
    },
    {
      opacity: 1,
      duration: 3,
    }
  ).set('#text3', {
    display: 'none',
    duration: 3,
  })

  sceneThreeText.fromTo('#text4', 
    {
      opacity: 0,
      duration: 3,
      delay: 3,
      display: 'none',
    },
    {
      opacity: 1,
      duration: 3,
      display: 'block'
    }
  )

  let scene3 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene3,
    trigger: "#scene3",
    start: "top top",
    end: "+=700",
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    animation: sceneThreeText,
    trigger: "#scene3",
    start: "top",
    end: "bottom center",
    scrub: true,
    markers: false,
  });


  // Scene 4
  let sceneFourText = gsap.timeline();
  ScrollTrigger.create({
    animation: sceneFourText,
    trigger: ".text-box",
    start: "top",
    end: "bottom center",
    scrub: false,
    markers: false,
    toggleActions: 'play onLeave onEnterBack onLeaveBack',
  });

  sceneFourText.fromTo('#text5', 
    {
      opacity: 0,
      duration: 3,
      delay: 0.5,
    },
    {
      opacity: 1,
      duration: 3,
    }
  ).set('#text5', {
    display: 'none',
    duration: 3,
  });

  sceneFourText.fromTo('#text6', 
    {
      opacity: 0,
      duration: 3,
      delay: 3,
      display: 'none',
    },
    {
      opacity: 1,
      x: 100,
      duration: 3,
      display: 'block'
    }
  );

  let scene4 = gsap.timeline();
  ScrollTrigger.create({
    animation: scene4,
    trigger: "#scene4",
    start: "top top",
    end: "+=700",
    scrub: true,
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

  const lenis = new Lenis();

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();