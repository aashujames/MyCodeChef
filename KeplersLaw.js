process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine()); // T Test Cases
  let i = 0;
  for (; i < t; i++) {
    let n = readLine().split(' ');    //inputs with space separated
    let T1 = n[0], T2 = n[1], R1 = n[2], R2 = n[3]   //Time periods T1, T2 and Semimajor Axes R1, R2
    
    //Determining constant of proportionality of planets
    let right = Math.pow(T1, 2)/Math.pow(R1, 3)   
    let left = Math.pow(T2, 2)/Math.pow(R2, 3)

    if (right === left) {
      console.log('Yes')
    }
    else {
      console.log('No')
    }
  }
}
