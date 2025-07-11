var main = document.querySelector(" #main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration: 0.6,
        // ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale: 2,
        backgroundColor: "#281501c8"
    })
})

imageDiv.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale: 1,
        backgroundColor:"#e5caac"
    })
})