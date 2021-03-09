// 88a--------------------------- дано натуральне число n. Чи входить цифра 3 в запис числа n2

const isIncluded = (n, x) => {
    return !!(Math.pow(n, 2)).toString().match(x.toString())
}

// console.log(isIncluded(3, 3));


// 88b--------------------------- дано натуральне число n. Поміняти порядок цифер числа n на зворотній

const reverseNumbers = (n) => {
    return parseInt(n.toString().split('').reverse().join(''))
}


// console.log(reverseNumbers(12345))

// 322--------------------------- Знайти натуральне число від 1 до 10 000 з максимальною сумою дільників

const maxDivisorsSum = () => {
    let total = [];
    for (let i = 1; i <= 10000; i++) {
        let max = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                max += j
            }
        }
        total.push(max)
    }
    return total.indexOf(Math.max(...total)) + 1
}

// console.log(maxDivisorsSum());
