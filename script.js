const numbers  = document.querySelectorAll(".number") ; 
const display = document.querySelector(".display") ;
const opps = document.querySelectorAll(".opp"); 
const add = document.querySelector("#add") ; 
const subs = document.querySelector("#subs") ; 
const mult = document.querySelector("#mult") ; 
const div = document.querySelector("#divi") ; 
const disp = document.querySelector("p") ; 
const result = document.querySelector(".result") ; 
let user_input='' ;

let temp = [] ; 
numbers.forEach((number)=>{
   
    number.addEventListener("click" ,
    ()=>
    {
        user_input+=number.value ; 
        disp.innerHTML=user_input;
         
        
    }
    )
}    
)



opps.forEach((opp)=>
{
    opp.addEventListener("click" , ()=>
    {
        user_input+=opp.value ; 
        disp.innerHTML=user_input;
        // test() ; 
    // console.log(temp) ; 
})
})  

function x(user_input)
{
    let num1 = user_input.substring(0,indexOf(opp.value)-1);
    let num2 = 0 ;
    
    console.log(num1) ; 
}

x(user_input) ; 
function division(x,y)
{
    return x/y ; 
}
function multip(x,y)
{
    return x*y ; 
}
function subst(x,y)
{
    return x-y
}
function adds(x,y)
{
    return x+y ; 
}
/*
function test()
{
let j = 0 ; 
for (let i=0 ; i<user_input.length;++i)
{
    if((user_input[i]=='+')||(user_input[i]=='-')
    ||(user_input[i]=='/')||(user_input[i]=='x'))
    {
        temp[j] = i ; 
        j+=1 ; 
    }
}
}
*/


result.addEventListener("click" , ()=>{console.log(temp);})



