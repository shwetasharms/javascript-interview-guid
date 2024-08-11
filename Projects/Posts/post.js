let data=[]
let cardContainer=document.querySelector(".card-container")
let cardheading=document.querySelector(".heading")
document.addEventListener("DOMContentLoaded", function(){
fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(res=>{
    console.log(res)
    data=res
    cardContainer.innerHTML
    for(let i=0;i<data.length;i++){
        cardContainer.innerHTML +=`
        <div class="card">
            <h5> Post ID: ${data[i].id}</h2>
            <h3>Title : ${data[i].title}</h3>
            <h4> Description : ${data[i].body}</h4>
        </div>
        `
    }
})
})