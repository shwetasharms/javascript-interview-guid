let container=document.querySelector(".container")
let stars=document.querySelectorAll(".star")
let count=document.getElementById("count")
let filledColor=0
container.addEventListener('click', function(e){
   let getCurrentIndex=e.target.dataset.index;
    console.log("getCurrentIndex", getCurrentIndex)
count.innerHTML=`Rating Count : ${getCurrentIndex} `
for(let i=0;i<filledColor;i++){
    stars[i].classList.remove("filled-star")
}
for(let i=0;i<getCurrentIndex;i++){
    stars[i].classList.add("filled-star")
}
filledColor=getCurrentIndex
})