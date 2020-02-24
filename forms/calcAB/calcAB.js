let calculate= function(num1, num2) {
  let product = num1*num2
  return product}

let myNumbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let productArray=[]

for(i=0;i<myNumbers.length/2;i+2){
  productArray.push(calculate(myNumbers[i],myNumbers[i+1]))
  }
  
  productArray.push(myNumbers[myNumbers.length-1])
  
let sum=0
for(i=0;i<productArray.length;i++){
  sum=productArray[i]+sum
  }

console.log(sum)  
  