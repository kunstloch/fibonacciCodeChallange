// create fibonacci sequence with n elements

function fibonacciGenerator (n) {
let output = [];
if (n == 1) {
  output = [0];
} 
if (n == 2) {
  output = [0, 1];
} else { 
  output = [0, 1];
  for (let i=2; i<n; i++) {
    output.push(output[i-2]+output[i-1]); 
    }
  }
 return output;
}

output = fibonacciGenerator(5);
console.log(output);
