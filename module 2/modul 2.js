export function calculator(str){
    console.log(str);
    str = str.split(' ');
    let number1 = BigInt(Number(str[0])); 
    let operetion = str[1]
    let number2 = BigInt(Number(str[2]));
    let result = 0
    switch(operetion){
        case '+':
            result = number1 + number2
            console.log(result)
            break;
        case '-':
            result = number1 - number2
            console.log(result)
            break;
        case '%':
        case '/':
            result = number1 / number2
            console.log(result)
            break;
        case '*':
            result = number1 * number2
            console.log(result)
    }
}