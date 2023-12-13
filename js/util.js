let createRandomInt = function(min, max){                   //Рандомное число в диапозоне мин макс
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//---------------------------------------------------------------------------------------------------------//

async function getUser(){
  let res = await fetch('https://29.javascript.pages.academy/kekstagram/data', {method: 'GET', credentials: 'same-origin'})
  let arrayUsers = await res.json()
  return arrayUsers
}

export { getUser }















































/*
let createUsers = function(kol){                               //Создание пользователя
  let arrayUsers = []
  for(let i = 1; i<kol; i++){
    let objectUsers = {}
    objectUsers.id = i
    objectUsers.url = 'photos/' + i + '.jpg'
    objectUsers.description = 'тыш мильон процент по кайфу сурт'
    objectUsers.likes = createRandomInt(15, 200)
    objectUsers.quantityComments = 2                                  //Количество коментариев
    objectUsers.comment = [{
      id: 1,
      avatar: 'img/avatar-6.svg',
      message: 'Какой-то комментарий',
      name: 'Александр',
    },{
      id: 2,
      avatar: 'img/avatar-3.svg',
      message: 'Какой-то комментарий',
      name: 'Кузя',
    }]
    arrayUsers.push(objectUsers)
  }
  return arrayUsers
}

export{createUsers}


let createComments = function(j){
  j++                                                  //Создание рандомного комментария
  let arrayComment = []
  for(let i = 1; i < j; ++i){
    let objectComment = {}
    objectComment.id = i
    objectComment.avatar = 'img/avatar-' + createRandomInt(1, 6) + '.svg'
    objectComment.message = commentArray[createRandomInt(0, commentArray.length - 1)]
    objectComment.name = nameArray[createRandomInt(0, nameArray.length - 1)]
    arrayComment.push(objectComment)
  }
  return arrayComment
}
*/