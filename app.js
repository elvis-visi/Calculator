//add two numbers
function add(num1,num2)
{
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

console.log(add(2,3))
console.log(divide(2,1))
console.log(divide(2,0))