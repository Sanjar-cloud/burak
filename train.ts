
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

function getSquareNumbers(sonlar: number[]): object[] {

  let result: object[] = []

  for (let numb of sonlar) {

    let obj = { n: numb, s: numb * numb }

    result.push(obj)
  }

  return result
}

console.log(getSquareNumbers([2, 5, 7]));

