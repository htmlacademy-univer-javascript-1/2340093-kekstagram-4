function isMeetingWithinWorkingHours(startTime, endTime, meetingStartTime, meetingDuration) {
  const start = convertToMinutes(startTime);
  const end = convertToMinutes(endTime);

  const meetingStart = convertToMinutes(meetingStartTime);
  const meetingEnd = meetingStart + meetingDuration;

  if (meetingStart >= start && meetingEnd <= end) {
    return true;
  } else {
    return false;
  }
}

function convertToMinutes(time) {
  let [hours, minutes] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

// Пример использования функции
console.log(isMeetingWithinWorkingHours("08:30", "17:00", "09:00", 60));
console.log(isMeetingWithinWorkingHours("08:00", "17:00", "16:30", 60));



//-------------------------------------------------------------------------------------//

let chosenNumber = function(number){
  number = '' + number;
  let k=0;
  let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numInStr = [];
  number = number.replaceAll(' ', '').split('');
  for(let i = 0; i<number.length; i++){
    for(let j = 0; j<number.length; j++){
      if(number[i] == arrayNumbers[j]){
        numInStr.push(arrayNumbers[j]);
      }
    }
  }
  if(numInStr.length == 0) {
    return 0/0;
  }
  return numInStr.join('');  //Возвращает числа из строки, также работает и с числовым значением
}


//----------------------------------------------------------------------------------------------------------------//

let checkPalindrome = function(str){
  let str2 = str.replaceAll(' ', '').toLowerCase().replaceAll(',','').replaceAll('.','')
  str = str.replaceAll(' ', '').replaceAll(',','').replaceAll('.','').toLowerCase().split('').reverse().join('')
  console.log(str2)
  console.log(str)
  if(str === str2){
    return true
  }else{         //Возвращает true если введенная строка является палиндромом
    return false
  }
}

let t = 'Я не стар, брат Сеня '

//-----------------------------------------------------------------------------------------------------------//

let check = function(str, strLength){
  if(str.length <= strLength){
    return true
  } else{           //Проверяет длину строки..
    return false
  }
}

check('my name islam', 15)
