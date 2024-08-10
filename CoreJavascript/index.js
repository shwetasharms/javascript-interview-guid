//  Question 1
// let c=0;

// let id = setInterval(() => {
// 	console.log(c++)
// },100)

// setTimeout(() => {
// 	clearInterval(id)
// },2000)


// Question 2
// let a = true;
// let c = 0;

// setTimeout(() => {
// 	a = false;
// },2000)

// while(a){
// 	console.log('Hello')
// }

// The above program will print Hello infinitely. Since, Javascript is a single threaded language the actual 
// execution happens only on the main thread. So, setTimeout will wailt for 2000 milliseconds on a seperate thread 
// as while loop has occupied the main thread. The exit condition for the loop is to set the variable a as fasle.
//  But as the loop continously running on the main thread , it a cannot be set false.


// Questionn 3
//  function getName1(){
// 	console.log(this.name);
// }

// Object.prototype.getName2 = () =>{
// 	console.log(this.name)
// }

// let personObj = {
// 	name:"Tony",
// 	print:getName1
// }

// personObj.print();
// personObj.getName2();

// getName1() function works fine because it's being called from personObj,
//  so it has access to this.name property. But when while calling getnName2 which is defined under
//   Object.prototype doesn't have any proprty named this.name. There should be name property under prototype.
//   function getName1(){
// 	console.log(this.name);
// }

// Object.prototype.getName2 = () =>{
//   console.log(Object.getPrototypeOf(this).name);
// }

// let personObj = {
// 	name:"Tony",
// 	print:getName1
// }

// personObj.print();
// Object.prototype.name="Steve";
// personObj.getName2();





function getName(){
	console.log(this.name)
}

function getName1(){
	console.log(this.name)
}
const person={
	name :"Shweta",
	print:getName
}