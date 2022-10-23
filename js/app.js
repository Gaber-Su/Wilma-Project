// let withMouse = document.getElementById("withMouse")
// console.log(withMouse);
// document.addEventListener("mousemove", function(e){
//   withMouse.style.top = `${e.clientY }px`
//   withMouse.style.left = `${e.clientX }px`
// })

let tracker = document.querySelector(".tracker");
// console.log(tracker);
document.addEventListener("mousemove", (e)=> {
    tracker.style.top = `${e.clientY}px`
    tracker.style.left = `${e.clientX}px`
})

