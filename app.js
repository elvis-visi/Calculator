//add two numbers
function add(num1,num2)
{
    console.log("addition ", num1 + num2)
    return num1 + num2;
}

console.log(add(2,3))

function subtract(num1,num2)
{
    
    return num1 - num2;
}

function multiply(num1,num2)
{
    return num1 * num2;
}

function divide(num1,num2)
{
    if(num2 == 0)
    {
        return "error";
    }

    return num1 / num2;
}


console.log(divide(2,1))
console.log(divide(2,0))

function operate(operator, num1, num2)
{
    //operators ->  + , - , * , /

    switch(operator)
    {
        case '+':
            add(num1,num2);
            break;

        case '-':
             subtract(num1,num2);
             break;

        case '*':
             multiply(num1,num2);
             break;

        case '/':
             divide(num1,num2);
             break;

        default: 
            'wrong operator';     

    }
}

operate('+',7,3);
operate('+',3,3);


const container = document.querySelector('#container');

const div = document.createElement('div');
div.style.display = "flex";

//add buttons from 0-9, 4 per line

for(let i = 0; i <= 9; i++)
{

    let button = document.createElement("button")
    button.textContent = i;
     div.appendChild(button);
}

container.appendChild(div);