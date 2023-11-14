let commentArray = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!']
let nameArray = ['Халид-кашмири','Абдул-хьамид','ВисВах','1усмани','Абдурахьман','Иттлам','Мага','Дин','Иба','До и вар сом','К1ай','1арж','Шемиль']

let createRandomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let createComments = function(j){
  let arrayComment = []
  for(let i = 0; i < 26; ++i){
    let objectComment = {}
    objectComment.id = i
    objectComment.avatar = 'img/avatar-' + createRandomInt(1, 6) + '.svg'
    objectComment.message = commentArray[createRandomInt(0, commentArray.length - 1)]
    objectComment.name = nameArray[createRandomInt(0, nameArray.length - 1)]
    arrayComment.push(objectComment)
  }
  return arrayComment[j]
}

let createUsers = function(){
  let arrayUsers = []
  for(let i = 1; i<26; i++){
    let objectUsers = {}
    objectUsers.id = i
    objectUsers.url = 'photos/' + i + '.jpg'
    objectUsers.description = 'тыш мильон процент по кайфу сурт'
    objectUsers.likes = createRandomInt(15, 200)
    objectUsers.comment = createComments(i)
    arrayUsers.push(objectUsers)
  }
  return arrayUsers
}

console.log(createUsers())