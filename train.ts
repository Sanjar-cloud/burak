
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



function calculateSumOfNumbers(arr: any[]): number {

  // noldan boshlanadi
  let Num: number = 0;

  //  tekshiramiz
  for (let item of arr) {
    if (typeof item === "number") {
      Num = Num + item;
    }
  }

  // qiymatni return qilamiz
  return Num;
}

console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 25]));
