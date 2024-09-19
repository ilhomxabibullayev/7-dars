// 1 masala

let numbers = [10, 20, 30, 40, 50];

let txt = "";
for (let x in numbers) {
    txt += numbers[x] + "<br>";
};

console.log(numbers);

// 2 masala

for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};

// 3 masala

function factorialize(num) {
    for (let result = 1; num > 1; num--) {
        result = result * num;
        console.log(result)
    }
};

factorialize(5);

// 4 masala



// 7 masala

let num = 12345;

console.log(Number(num.toString().split('').reverse().join('')));

// 8 masala

function max(...numbers) {
    let result = -Infinity
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(3, 7, 2, 10, 6));

// 9 masala

let text = "assalamu alaykum";

console.log(text.length);