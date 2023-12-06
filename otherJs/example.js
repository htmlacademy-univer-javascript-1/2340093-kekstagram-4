function isMeetingWithinWorkingHours(startTime, endTime, meetingStartTime, meetingDuration) {
  let start = strInNum(startTime)
  let end = strInNum(endTime)

  let meetingStart = strInNum(meetingStartTime)
  let meetingTime = meetingStart + meetingDuration

  if(meetingTime >= start && meetingTime <= end)
    return true
  else
    return false
}

function strInNum(str){
  let[hours, minutes] = str.split(':')
  return parseInt(hours) * 60 + parseInt(minutes)
}

// Пример использования функции
console.log(isMeetingWithinWorkingHours("08:30", "17:00", "09:00", 900));
console.log(isMeetingWithinWorkingHours("08:00", "17:00", "16:30", 30));
console.log('----------------------------------------------------------------');