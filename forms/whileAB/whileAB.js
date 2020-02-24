
let firstName = prompt('Enter first name:')
let lastName = prompt('Enter last name:')

let firstNameChar=Array.from(firstName)
let lastNameChar=Array.from(lastName)


let counterFirst=0
while(counterFirst<firstNameChar.length) {
  console.log(`Letter ${counterFirst+1} is: ${firstNameChar[counterFirst]}`)
  counterFirst++
  }
  
let counterLast=0
while(counterLast<lastNameChar.length) {
  console.log(`Letter ${counterLast+1} is: ${lastNameChar[counterLast]}`)
  counterLast++
  }
  