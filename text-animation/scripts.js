function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text =h1.textContent
    var splitText = h1Text.split("")
    var clutter =""

    var halfValue= Math.floor(splitText.length/2)
    splitText.forEach(function(elem,idx){
        var ch = elem ==" " ? "&nbsp" : elem
        if(idx < halfValue){
            clutter+=`<span class="a">${ch}</span>`
        }else{
            clutter+=`<span class="b">${ch}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakTheText()

gsap.from(".a",{
    y:50,
    duration:0.2,
    delay:0.5,
    opacity:0,
    stagger:0.15,
    ease:"power4.out"
    
})

gsap.from(".b",{
    y:50,
    duration:0.2,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
    ease:"power4.out"
    
})