import { nameArray, commentArray } from "./data.js"

let createRandomInt = function(min, max){                   //Рандомное число в диапозоне мин макс
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//---------------------------------------------------------------------------------------------------------//

let createComments = function(j){
  j++                                                  //Создание комментария
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

let createUsers = function(kol){                               //Создание пользователя
  let arrayUsers = []
  for(let i = 1; i<kol; i++){
    let objectUsers = {}
    objectUsers.id = i
    objectUsers.url = 'photos/' + i + '.jpg'
    objectUsers.description = 'тыш мильон процент по кайфу сурт'
    objectUsers.likes = createRandomInt(15, 200)
    objectUsers.quantityComments = createRandomInt(5, 20)  //Количество коментариев
    objectUsers.comment = createComments(objectUsers.quantityComments)
    arrayUsers.push(objectUsers)
  }
  return arrayUsers
}

export{createUsers}
