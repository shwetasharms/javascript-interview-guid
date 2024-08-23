function sum(a=5,b=7){
    console.log(a+b)
}
sum(null,20)

// Output is 20 , because when we pass the deault parameter in  the function it means when we call that function without paramter the it take the default paramter 
// or if we pass the undefined in the paramter then it take the default value , but in this example we pass the null , so it return 20