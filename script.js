/* ===( Build By : CODE AASHU )=== */
function pageOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            start: "top 0%",
            end: "top -250%",
            scrub: 2,
            pin: true
        }
    })
    tl
        .to("#page1 h1", {
            transform: "translateX(-50%)",
            fontWeight: 100,
            duration: 2
        })

        .to("#page1 h1", {
            transform: "translateX(-130%)",
            fontWeight: 900,
            duration: 2

        })
        .to("#video-container", {
            top: "0%",
            delay: -1.4,
            duration: 2

        })
        .to("#video-container video", {
            transform: "scale(1)",
            duration: 4

        })

}
pageOne()
function pageTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            // markers:true,
            start: "top -5%",
            end: "top -100%",
            scrub: 2,
            pin: true
        }
    })
    tl2
        .from("#center #left", {
            y: "100%",
            duration: .5,
            opacity: 0,
        })
        .from("#center #right", {
            y: "150%",
            opacity: 0,
        })

}
pageTwo()
function pg3() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            pin: true,
            scroller: "body",
            scrub: 4,
            // markers:true
        }
    })
    tl3
        .to("#p1", {
            top: "10%",
            duration: 1.5
        })
        .to("#p1", {
            top: "-50%",
            duration: 1.5
        },"a")
        .to("#p2", {
            top: "18%",
            duration: 1.5

        },"a")
        .to("#p2", {
            top: "-45%",
            duration: 1.5

        },"b")
        .to("#p3", {
            top: "26%",
            duration: 1.5

        },"b")
        .to("#p3", {
            top: "-40%",
            duration: 1.5

        },"c")
        .to("#p4", {
            top: "34%",
            duration: 1.5

        },"c")
        .to("#p4", {
            top: "-35%",
            duration: 1.5

        },"d")
        .to("#p5", {
            top: "42%",
            duration: 1.5

        },"d")
}
pg3()

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        scrub: 1,
        start:"bottom 50%",
        // end:"top -10%",
        // markers:true
    }
})

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        scrub: 2,
        start:"top -50%",
        // markers:true,
        pin:true
    }
});

tl4
.from("#page4 #video-container2",{
    y:"100vh",
    delay:1,
    duration:1
})
.to("#page4 #video-container2 video",{
    delay:1,
    duration:2,
    transform: "scale(1)"

})


var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        scrub: 1,
        start:"top -90%",
        end:"top -100%",
        // markers:true
    }
});
tl5.to("#page5",{
    backgroundColor: "black",
},"h")

.to("#page5 .more h1,#page5 .more i",{
   color: "white",
},"h")














