let chosenNumber = function(number){
  number = '' + number
  let k=0
  let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let numInStr = []
  number = number.replaceAll(' ', '').split('')
  for(let i = 0; i<number.length; i++){
    for(let j = 0; j<number.length; j++){
      if(number[i] == arrayNumbers[j]){
        numInStr.push(arrayNumbers[j])
      }
    }
  }
  if(numInStr.length == 0) {
    return 0/0
  }
  return numInStr.join('')
}

console.log(chosenNumber(45234));

//----------------------------------------------------------------------------------------------------------------//

let checkPalindrome = function(str){
  let str2 = str.replaceAll(' ', '').toLowerCase().replaceAll(',','').replaceAll('.','')
  str = str.replaceAll(' ', '').replaceAll(',','').replaceAll('.','').toLowerCase().split('').reverse().join('')
  console.log(str2)
  console.log(str)
  if(str === str2){
    return true
  }else{
    return false
  }
}

let x = 'Я не стар, брат Сеня '
console.log(checkPalindrome(x))

//-----------------------------------------------------------------------------------------------------------//

let check = function(str, strLength){
  if(str.length <= strLength){
    return true
  } else{
    return false
  }
}

check('my name islam', 15)
console.log(check('my name islam', 15))
