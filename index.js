function receivesAFunction(callback){
return callback();
} 
console.log(receivesAFunction("Hello, Good Morning"))
  
  function returnsANamedFunction(){
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction(){
return function(name){
    return name
}
}