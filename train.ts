
// function getReverse(hello: string): string {

//   let words: string[] = hello.split(" ");
//   let boshjoy: string[] = [];

//   for (let word of words) {
//     let rev: string = word.split("").reverse().join("");
//     boshjoy.push(rev);
//   }

//   return boshjoy.join(" ");
// }

// console.log(getReverse("we like codding")); // i ekil gnidoc


//m-task

// function getSquareNumbers(sonlar: number[]): object[] {

//   let result: object[] = []

//   for (let numb of sonlar) {

//     let obj = { n: numb, s: numb * numb }

//     result.push(obj)
//   }

//   return result
// }

// console.log(getSquareNumbers([2, 5, 7]));


//N-task 

// function palindromCheck(str: string): boolean {

//   //  Stringni teskari qilib olib keyin 
//   let reversed: string = str.split("").reverse().join("");

//   //  Teskari va asliga solishtiramiz return true yoki fasle qaytarish kk
//   if (str === reversed) { // solishtirish qismi
//     return true;  //tpogri bolsa
//   } else {
//     return false; //aks xolda false retuen qiladi
//   }
// }

// console.log(palindromCheck("aka")); // true
// console.log(palindromCheck("mama")); // false



// function calculateSumOfNumbers(arr: any[]): number {

//   // noldan boshlanadi
//   let Num: number = 0;

//   //  tekshiramiz
//   for (let item of arr) {
//     if (typeof item === "number") {
//       Num = Num + item;
//     }
//   }

//   // qiymatni return qilamiz
//   return Num;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 25]));



//P-task 

// function objectToArray(obj: {[key: string]: any}): any[] {

//   //  array yaratamiz
//   let result: any[] = [];

//   // har bir  kalit va qiymatni olamiz
//   for (let key in obj) {
//     let item = [key, obj[key]];  // variable nomi -> a ichidagi value -> 10
//     result.push(item);
//   }

//   // return  qaytaramiz
//   return result;
// }

// console.log(objectToArray({a: 10, b: 20}));
// [["a", 10], ["b", 20]]



//Q-task 

function hasProperty(obj: {[key: string]: any}, string: string): boolean {

  // str object ichida bormi tekshiramiz
  if (string in obj) {
    return true;
  } else {
    return false;
  }
}

console.log(hasProperty({name: "BMW", model: "M3"}, "model")); // true return qiladi
console.log(hasProperty({name: "BMW", model: "M3"}, "year"));  // false return qiladi
