function generateRandomNumber(num){
let result=''
for(let i=0;i<num;i++){
  const randomDigit=Math.floor(Math.random()*10)
  result+=randomDigit
  
}
return result
}
console.log(generateRandomNumber(5))
// console.log(randomDigit)