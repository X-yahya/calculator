const numbers  = document.querySelectorAll(".number") ; 
const display = document.querySelector(".display") ;
const opps = document.querySelectorAll(".opp"); 
const add = document.querySelector("#add") ; 
const subs = document.querySelector("#subs") ; 
const mult = document.querySelector("#mult") ; 
const div = document.querySelector("#divi") ; 
const disp = document.querySelector("p") ; 
const result = document.querySelector(".result") ;
const oppres = document.querySelector(".oppres") ; 
const clear = document.querySelector(".clear") ;
let user_input='' ;
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        
        console.log(user_input.split(' '))
        if (user_input.split(' ').length < 4) {
            user_input += `${number.value}`;
            disp.innerHTML = user_input;
        }
    });
});

opps.forEach((opp) => {
    opp.addEventListener("click", () => {
        if (user_input.split(' ').length < 3) {
            user_input += ` ${opp.value} `;
            disp.innerHTML = user_input;
        }
    });
});

result.addEventListener("click", () => {
    const x = user_input.split(' ');
    oppres.style.color = "gray";

    if (x.length === 3) {
        // Perform the calculation only if there are two numbers and an operation
        if (x[1] === '+') {
            let tempo = adds(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString(); // Convert the result to a string
            
        } else if (x[1] === 'x') {
            let tempo = multip(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        } else if (x[1] === '-') {
            let tempo = subst(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        } else {
            let tempo = division(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        }
    }
});


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

function displayres(res)
{
    // const para = document.createElement("p") ; 
    // para.textContent = res ; 
    // para.classList.add = "oppres" ; 
    // disp.appendChild(para) ; 
    oppres.innerHTML = res ; 
}

function resetdisplay(x,y)
{   
    x.innerHTML = "0" ; 
    y.innerHTML = "" ;
    user_input = ""
 
}

clear.addEventListener("click" , ()=>
{
    const aux = document.querySelector(".oppres") ;
    resetdisplay(disp,aux) ;
})

