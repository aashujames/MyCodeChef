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
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        
      let string = readLine()
      const n = string.length

      if(n % 2 === 0) {
        const first = new Object()
        const second = new Object()

        for (let i=0; i<n/2; i++) {
          if (! (first[string[i]])) {
            first[string[i]] = 1;
          }
          else {
            first[string[i]] += 1;
          }
        }
        
        for (let j=n/2; j<n; j++) {
          if (! (second[string[j]])) {
            second[string[j]] = 1;
          }
          else {
            second[string[j]] += 1
          }
        }
        
      let fk = Object.keys(first)
      
      let flag = 'YES';
      for (let index = 0; index < fk.length; index++) {
        const key = fk[index];
        if(second[key]) {
          if(second[key] === first[key]) {
            continue
          }
          else{
            flag = 'NO';
            break
          }
        }
        else {
          flag = 'NO';
          break
        }
      
      }

      console.log(flag)
        
      }

    else {
      let low = 1
      let high = n
      mid = (low+high)/2
      
      const first = new Object()
      const second = new Object()

      for (let i=0; i<mid-1; i++) {
        if (! (first[string[i]])) {
          first[string[i]] = 1;
        }
        else {
          first[string[i]] += 1;
        }
      }
        
      for (let j=mid; j<n; j++) {
        if (! (second[string[j]])) {
          second[string[j]] = 1;
        }
        else {
          second[string[j]] += 1
        }
      }
      
      let fk = Object.keys(first)
      
      let flag = 'YES';
      for (let index = 0; index < fk.length; index++) {
        const key = fk[index];
        if(second[key]) {
          if(second[key] === first[key]) {
            continue
          }
          else{
            flag = 'NO';
            break
          }
        }
        else {
          flag = 'NO';
          break
        }
      
      }

      console.log(flag)
    }
    }
}