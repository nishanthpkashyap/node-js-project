function greet(s,call)
{
    call(s);
}

greet("Hello",(data)=>
{
    console.log(data);
}); 

