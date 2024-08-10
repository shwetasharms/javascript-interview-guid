var obj={
    helloWorld:function(){
        return "helo world" + this.name
    },
    name:"Hello"
}

var obj2={
helloWorld:obj.helloWorld,
name:'Bye'
}
console.log(obj2.helloWorld.call(obj))
console.log(obj2.helloWorld())
 