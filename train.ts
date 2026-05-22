
function getReverse(hello: string): string {

  let words: string[] = hello.split(" ");
  let reversed: string[] = [];

  for (let word of words) {
    let rev: string = word.split("").reverse().join("");
    reversed.push(rev);
  }

  return reversed.join(" ");
}

console.log(getReverse("we like codding")); // i ekil gnidoc
