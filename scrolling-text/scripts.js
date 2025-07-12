window.addEventListener("wheel",function(dets){
// deltaY Scroll krte time value btata
// +ve jb seedha scroll kro baaki ulta m -ve
    if(dets.deltaY > 0){
        gsap.to(".marque",{
            transform: 'translateX(-200%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".marque img",{
            rotate:0
        })
    }else{
        gsap.to(".marque",{
            transform: 'translateX(200%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }
})
