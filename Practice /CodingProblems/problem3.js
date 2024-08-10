const nestedArray = [1, [2, [3, 4], 5], 6];
output= [1,2,3,4,5,6]


function flatternArray(arr,newArray=[]){
arr.forEach((data)=>{
if(Array.isArray(data)){
    flatternArray(data,newArray)
}else{
    newArray.push(data)
}
})
return newArray
}
console.log(flatternArray(nestedArray))