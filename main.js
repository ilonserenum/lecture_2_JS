// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

// x < 100 შემთხვევაში x-ის მაქსიმალური მნიშვნელობა იქნება 99
for (let x = 5; x < 100; x++) {
    console.log(x);
}

// 2. მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// ვარიანტი 1
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i]);
    }
}

// ვარიანტი 2
for (const num of array1) {
    if (num > 0 && num < 10) {
        console.log(num);
    }
}

// 3. მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of array2) {
    if (num == 5) {
        console.log("არის");
        break;
    }
}

// 4. მოცემულია მასივi
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of array3) {
    sum = sum + num;
}

console.log(`Sum of ${array3} is ${sum}`);

// 5. მოცემულია მასივი:
// let array4 = [1, 2, 3, 7, 6, 9];
// გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];
sum = 0;
for (const num of array4) {
    sum = sum + num;
}
let mean = sum / array4.length;
console.log(`Mean of ${array4} is ${mean}`);

// 6. მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა
//  let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];
for (const num of array5) {
    if (num != 7) {
        console.log(num);
    }
}

// 7. მოცემულია ობიექტი:
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active"
// };

// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active",
};

console.log(user.studentstatus);

// 8. მოცემულია ობიექტი:
// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }

// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:
// hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

user = {
    name: "giorgi",
    age: 20,
    studentstatus: "active",
};

if (user.age < 18 && user.studentstatus == active) {
    console.log("hello");
} else if (user.name == "levani") {
    console.log("hello levani");
} else if (user.studentstatus == "active" || user.age < 25) {
    console.log("hello world");
} else {
    console.log("error");
}

// 9. მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

// let array = [
//   [2, -3, 5, 10],
//   [25, -24, -11, 100],
//   [-6, -7, 10],
// ];

let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
];

for (const subarray of array) {
    for (const num of subarray) {
        if (num > 0) {
            console.log(num);
        }
    }
}

// 10. let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// 1.ამოიღეთ მარტო ლუწი რიცხვები
// 2.ამოიღეთ კენტი რიცხვები

array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (const number of array) {
    if (number % 2 == 0) {
        console.log(number);
    }
}

//  11. მოცემულია მასივი
// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]

// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
    { username: "giorgi", status: false },
    { username: "levani", status: false },
    { username: "anna", status: true },
];

for (let value of users) {
    if (value.status) {
        console.log(value);
    }
}
