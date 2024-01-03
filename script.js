const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const opps = document.querySelectorAll(".opp");
const disp = document.querySelector("p");
const result = document.querySelector(".result");
const oppres = document.querySelector(".oppres");
const clear = document.querySelector(".clear");
const deleteBttn = document.querySelector(".delete");
let user_input = '';

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        const filterarr = user_input.split(' ').filter(item => item !== "");
        if (filterarr.length < 4) {
            user_input += `${number.value}`;
            disp.innerHTML = user_input;
        }
    });
});

opps.forEach((opp) => {
    opp.addEventListener("click", () => {
        if (user_input.split(' ').length < 4) {
            user_input += ` ${opp.value} `;
            disp.innerHTML = user_input;
        }
    });
});

deleteBttn.addEventListener("click", () => {
    if (user_input === "0" && user_input.length === 1) {
        return;
    } else {
        let slicedNDiced = user_input.slice(0, -1);
        disp.innerHTML = slicedNDiced;
        user_input = slicedNDiced;
    }
});

result.addEventListener("click", () => {
    const x = user_input.split(' ').filter(item => item !== "");

    if (x.length < 4) {
        if (x[1] === '+') {
            let tempo = adds(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        } else if (x[1] === 'x') {
            let tempo = multip(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        } else if (x[1] === '-') {
            let tempo = subst(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        } else if (x[1] === '/') {
            if (parseFloat(x[2]) === 0) {
                displayres("Error: Cannot divide by zero");
                resetdisplay(disp,disp);
                return;
            }
            let tempo = division(parseFloat(x[0]), parseFloat(x[2]));
            displayres(tempo);
            user_input = tempo.toString();
        } else {
            console.error("Invalid operation");
        }
    }
});

function division(x, y) {
    return x / y;
}

function multip(x, y) {
    return x * y;
}

function subst(x, y) {
    return x - y;
}

function adds(x, y) {
    return x + y;
}

function displayres(res) {
    oppres.innerHTML = res;
}

function resetdisplay(x, y) {
    x.innerHTML = "0";
    y.innerHTML = "";
    user_input = "";
}

clear.addEventListener("click", () => {
    const aux = document.querySelector(".oppres");
    resetdisplay(disp, aux);
});
