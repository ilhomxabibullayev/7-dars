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

const start = 2;
const diff = 3;
const n = 10;
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += start + i * diff;
}

console.log("Yig'indi:", sum);

// 5 masala

const input = prompt("Matn kiriting:");

let result = "";

for (let i = 0; i < input.length; i++) {
    result += input[i].repeat(3);
}

console.log(result);

// 6 masala

for (let i = 1; i <= 10; i++) {
    console.log(i + " ning kvadrati: " + i * i);
}

// 7 masala

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

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

// 10 masala

numbers = [10, 20, 30, 40, 50];

sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("O'rtacha qiymat:", average);