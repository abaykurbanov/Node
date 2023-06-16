const add=function(a,b,c){
    return a+b+c
    
}

const cat=function (text){
    console.log( `
 /\\_/\\  
( o.o ) ${text}
 > ^ < 
`)
}


module.exports={
    add:add,
    // minus:function(a,b,c,d){
    //     return a-b
    // },
    cat
}