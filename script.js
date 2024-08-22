var screen2 = document.querySelector("#page5")
var cursor2 = document.querySelector("#cursor2")

screen2.addEventListener("mousemove",function(dets){
    gsap.to(cursor2,{
            x:dets.x,
            y:dets.y,
            
    })
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"
})

screen2.addEventListener("mouseleave", function(){
    gsap.to(cursor2,{
        scale:0,
        opcaity:0,
    })
})
screen2.addEventListener("mouseenter", function(){
    gsap.to(cursor2,{
        scale:1,
        opacity:1,
    })
})
var screen = document.querySelector("#mainpage")
var cursor = document.querySelector("#cursor")

screen.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            
    })
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"
})

screen.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opcaity:0,
    })
})
screen.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
})



gsap.from("#head",{
    y:70,
})

gsap.from("#head2",{
    y:70,
    delay:0.1,
})

gsap.from("#gamenest",{
    y:-100,
})
gsap.from("#nav",{
    y:-100,
    delay:0.1,
})
gsap.from("#btn",{
    y:70,
    delay:0
})

gsap.from("#page2h1",{
    scrollTrigger:{
        trigger:"#page2h1",
        scroller:"body",
        // markers:true,
    },
    opacity:0,
    y:100,
    
})
gsap.from(".box1",{
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        // markers:true,
        start: "top 80%",
    },
    opacity:0,
    y:100,
    
})
gsap.from(".box2",{
    scrollTrigger:{
        trigger:".box2",
        scroller:"body",
        // markers:true,
        start: "top 80%",
        // end:"bottom 10%",
    },
    opacity:0,
    y:100,
    // delay:1,
    
})

gsap.from("#p3content",{
    scrollTrigger:{

        // markers:true,
        start:"35%",
        scrub:1,
    },
    scale:0.8,
    
})

gsap.from("#p4h1",{
    scrollTrigger:{
        trigger:"#p4h1",
        scroller:"body",
        // markers:true,
        start:"top 95%"
    },
    scale:0.8,
    y:100,
})
gsap.from("#p4img1",{
    scrollTrigger:{
        trigger:"#p4img1",
        scroller:"body",
        // markers:true,
        // start:"top 95%"
    },
    x:-50,
    y:50,
    // scale:0,
    duration:1
})
gsap.from("#p4p1",{
    scrollTrigger:{
        trigger:"#p4p1",
        scroller:"body",
        // markers:true,
        // start:"top 95%"
    },
    opacity:0,
    duration:1
})
gsap.from("#p4img3",{
    scrollTrigger:{
        trigger:"#p4img3",
        scroller:"body",
        // markers:true,
        // start:"top 95%"
    },
    x:-50,
    y:50,
    // scale:0,
    duration:1
})
gsap.from("#p4p3",{
    scrollTrigger:{
        trigger:"#p4p3",
        scroller:"body",
        // markers:true,
        // start:"top 95%"
    },
    opacity:0,
    duration:1
})
gsap.from("#p4img2",{
    scrollTrigger:{
        trigger:"#p4img2",
        scroller:"body",
        // markers:true,
        // start:"top 95%"
    },
    x:50,
    y:50,
    // scale:0,
    duration:1
})
gsap.from("#p4p2",{
    scrollTrigger:{
        trigger:"#p4p2",
        scroller:"body",
        // markers:true,
        // start:"top 95%"
    },
    opacity:0,
    duration:1
})

gsap.from("#circle",{
    scrollTrigger:{
        trigger:"#circle",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    },
    rotate:-300,
    duration:2,
})



const smoothScroll = (h) => {
    let i = h || 100;
    if (i < 100) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
        }, 10);
    }
}
let button = document.querySelector("#btn01")
button.addEventListener('click', () => smoothScroll());

