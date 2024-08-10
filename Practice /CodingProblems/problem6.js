// Find the first pair those sum are equal to 0
let arr=[-5,-4,-3,-2,0,2,4,6,8]


// It is necesary that this array is sorted , if it is not sorted then first sirt this arry
//  Method 1 
// function firstpairSum(){
//     for(let numbers of arr){
//         for(let j=1;j<arr.length;j++){
//             if(numbers+arr[j]==0){
//                 return [ numbers,arr[j]]
//             }
//         }
//      }
// }
// console.log(firstpairSum())
//   But the problem with this code it take too much iteration and loop run so many times and also its time complexity is 
// o(n2) quadretic


// Method 2
function firstpairSum(arr){
    let left=0
    let right=arr.length-1
    for(let j=0;j<arr.length;j++){

        if(left+right==0){
            return [left,right]
        }else if(left+right<0){
            left=left+1
        } else{
            right=right-1
        }
    }
   

}
console.log(firstpairSum(arr))