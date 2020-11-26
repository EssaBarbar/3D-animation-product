const card = document.querySelector(".card")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const img = document.querySelector(".sneaker img")
const purchase = document.querySelector(".purchase button")
const info = document.querySelector(".info h3")
const sizes = document.querySelector(".sizes")





card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate In

container.addEventListener('mouseenter', (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.style.transition = "none"
    // Pop Out
    title.style.transform = "translateZ(150px)"
    img.style.transform = "translateZ(200px) rotateZ(-45deg)"
    purchase.style.transform = "translateZ(50px)"
    info.style.transform = "translateZ(50px)"
    sizes.style.transform = "translateZ(50px)"

})

//Animate Out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Pop Back
    title.style.transform = "translateZ(0px)"
    img.style.transform = "translateZ(0px) rotateZ(0deg)"
    purchase.style.transform = "translateZ(0px)"
    info.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
})
