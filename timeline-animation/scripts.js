// ye bhi  ek similar scenario k liye method hai
// var tl = gsap.timeline({paused:true})

var tl = gsap.timeline()
var menu = document.querySelector("#nav i")
var close = document.querySelector("#page i")

gsap.from("#nav h2",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:1

})

tl.to("#page",{
    right:0,
    duration:0.7
})

tl.from("#page h4",{
    x:100,
    duration:1,
    stagger:0.3,
    opacity:0
})

tl.from("#page i",{
    opacity:0
})

tl.pause()   //yaha par koi code nahi chl rha (timeline wala)

menu.addEventListener("click",function(){
    tl.play();
})

close.addEventListener("click",function(){
    tl.reverse();
})