// LCM

let num1 = 1455
let num2 = 15
let limit
const  loop = []

if (num1 > num2) {
    limit = num1
}else(
    limit = num2
)

for(let number = 1,count = 0; number <= limit; number++){
    let factors = 0
    for (let divisor = 1; divisor <= number; divisor++) {
        if (number % divisor === 0) {
            factors++
        }
    }
    if (factors === 2) {
        count++
        loop.push(number)
    }
}

console.log(loop)