
function getReverse(hello: string): string {

  let words: string[] = hello.split(" ");
  let boshjoy: string[] = [];

  for (let word of words) {
    let rev: string = word.split("").reverse().join("");
    boshjoy.push(rev);
  }

  return boshjoy.join(" ");
}

console.log(getReverse("we like codding")); // i ekil gnidoc
