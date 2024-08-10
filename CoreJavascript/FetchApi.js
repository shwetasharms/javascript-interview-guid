document.addEventListener("DOMContentLoaded", function(event){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((res)=>{
        console.log(res)
    })
})