function calculator (var1, var2, operator){
    let result;
    switch(operator){
            case '+':
                result = var1 + var2;
                break;
            case '-':
                result = var1 - var2;
                break;
            case '/':
                result = var1 / var2;
                break;
            case '*':
                result = var1 * var2;
                break;
    }
    console.log(`the result is ${result}`)
    return result;
}

calculator(5, 400, '*');