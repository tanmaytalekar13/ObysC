function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
}
function loader() {
    var t1=gsap.timeline();
t1.from(".line h1",{
    y:120,
    stagger:0.5,
    duration:0.6,
    delay:0.5
});
t1.from("#line1-part1",{
    opacity:0,
    onStart:function () {
        var h5Timer=document.querySelector("#line1-part1 h5");
        var grow=0;
        setInterval(function(){
            if (grow<100) {
                h5Timer.innerHTML=grow++;
            }
            else{
                h5Timer.innerHTML=grow;
            }
        },35);
    }
});
t1.to(".line h2",{
    animationName:"loaderanime",
    opacity:1
});
t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2.6
});
t1.from("#page1",{
    delay:0.1,
    y:1600,
    opacity:0,
    duration:0.5,
    ease: Power4
});
t1.to("#loader",{
    display:"none",
});
t1.from("nav",{
    opacity:0
});
t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,
    stagger:0.2

})
t1.from("#hero1, #page2",{
 opacity:0,

},"-=1");
}
function cursorAnimation() {
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.makeMagnet("#nav-part2 h4,#nav-part1 i");
  
    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video")
    videoContainer.addEventListener("mouseenter", function () {
      videoContainer.addEventListener("mousemove", function (dets) {
        gsap.to(".mousefollower", {
          opacity: 0
        });
        gsap.to("#video-crsr", {
          left: dets.x - 570,
          y: dets.y - 300,
        });
      });
    });
    videoContainer.addEventListener("mouseleave", function () {
      gsap.to(".mousefollower", {
        opacity: 1
  
      });
      gsap.to("#video-crsr", {
        left: "70%",
        top: "-10% !important"
      });
      
    });
  
  
  
    var flag = 0
    videoContainer.addEventListener("click", function () {
      if (flag == 0) {
        video.play()
        video.style.opacity = 1
        document.querySelector("#video-crsr").innerHTML = `<i class="ri-pause-mini-fill"></i>`
        gsap.to("#video-crsr", {
          scale: 0.5
        })
        flag = 1
      } else {
        video.pause()
        video.style.opacity = 0
        document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-mini-fill"></i>`
        gsap.to("#video-crsr", {
          scale: 1
        })
        flag = 0
      }
    })
  }
function sheriAnimation() {
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":6.18,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241450273142258},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.32,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
        gooey:true
    })
}
document.addEventListener("mousemove",function(dets) {
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y

    })
})
document.querySelector("#hero3").addEventListener("mouseenter",function () {
    gsap.to("#flag",{
        opacity:1
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function () {
    gsap.to("#flag",{
        opacity:0
    })
})
document.querySelector(".last-circle").addEventListener("mouseenter",function () {
    gsap.to(".last-circle",{
      scale:0.9
  })
})

document.querySelector(".last-circle").addEventListener("mouseleave",function () {
  gsap.to(".last-circle",{
    scale:1
  })
})
document.querySelectorAll(".heading").forEach(container => {
  const heading = container.querySelector("h2");
  const image = container.querySelector(".image-div img");

  const animateHeading = () => {
      gsap.to(heading, {
          y: -10
      });
  };

  const resetHeading = () => {
      gsap.to(heading, {
          y: 10
      });
  };

  heading.addEventListener("mouseenter", animateHeading);
  heading.addEventListener("mouseleave", resetHeading);
  image.addEventListener("mouseenter", animateHeading);
  image.addEventListener("mouseleave", resetHeading);
});


const textAnimation = document.querySelector("#footer h1");
      
      // Initialize Textillate.js on the h1 element
      $(textAnimation).textillate({ in: { effect: 'fadeIn' }, out: { effect: 'fadeOut' }, autoStart: false });

      textAnimation.addEventListener("mouseover", function () {
        // Add italic class
        textAnimation.classList.add("italic");

        gsap.fromTo(textAnimation, 
          { opacity: 0 },
          { opacity: 1, delay: 0.5, duration: 1, onStart: function() {
            $(textAnimation).textillate('in');
          }
        });
      });

      textAnimation.addEventListener("mouseleave", function () {
        // Remove italic class
        textAnimation.classList.remove("italic");

        gsap.to(textAnimation, 
          { opacity: 1, duration: 1, onStart: function() {
            $(textAnimation).textillate('out');
          }
        });
      });

loader();
cursorAnimation()
locomotiveAnimation();
sheriAnimation();