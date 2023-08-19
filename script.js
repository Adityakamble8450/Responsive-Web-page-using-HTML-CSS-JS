const mouseFollower = (xscal,yscal) =>{
    window.addEventListener("mousemove",(dets) =>{
        document.querySelector("#circle").style.transform  = `translate(${dets.clientX}px,
        ${dets.clientY}px) scale(${xscal},${yscal})`;
    })
}

const mousescrewe = () =>{
    // set defaulte value 
    var xscal = 1
    var yscal = 1 

    var xprew = 0
    var yprew = 0

    window.addEventListener("mousemove",(dest) =>{
    
        xscal =   gsap.utils.clamp(.8,1.2,dest.clientX - xprew)
        yscal =   gsap.utils.clamp(.8,1.2,dest.clientY - yprew)

       xprew = dest.clientX
       yprew = dest.clientY

       mouseFollower(xscal,yscal);





    })


}











const Animation = () =>{
var el = gsap.timeline();

el.from("#navR",{
    y:-10,
    opacity:0,
    duration:1.5,
    ease:Expo.easeInout,
})


el.to(".blomerelem",{
    y:0,
    duration:1.5 ,
    ease:Expo.easeInout,
    stagger:.2
})
el.to(".blomerelemext",{
    y:0,
    duration:1.5 ,
    ease:Expo.easeInout,
    delay:-1
})

}




mousescrewe()
Animation()
mouseFollower();

