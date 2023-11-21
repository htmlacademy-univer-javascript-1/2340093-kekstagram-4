import {users} from "./renderingThambnails.js"
let createRandomInt = function(min, max){                   //Рандомное число в диапозоне мин макс
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let picture = document.querySelectorAll('.picture')
let classHidden = document.querySelector('.big-picture')
let bigPictureCancel = document.querySelector('.big-picture__cancel')
let socialHeader = document.querySelector('.social__header')
let avatarPicture = socialHeader.querySelector('.social__picture')
let socialCaption = socialHeader.querySelector('.social__caption')
let likesCount = socialHeader.querySelector('.likes-count')
let commnetsCount = document.querySelector('.comments-count')
let bigPicture = document.querySelector('#big-picture__img')
//---------------------------------------------------------------------//
let socialCommnetCount = document.querySelector('.social__comment-count')
let commentsLoader = document.querySelector('.comments-loader')
//---------------------------------------------------------------------//
let commentContainer = document.querySelector('.social__comments')
let socialComment = document.getElementById("social__comment").content
let socialCommentPicture = socialComment.querySelector(".social__picture")
let socialCommentText = socialComment.querySelector(".social__text")

for(let i = 0; i < picture.length; i++){
  let pictureItem = picture[i]
  pictureItem.addEventListener('click', function(evt){
    evt.preventDefault()

    if(pictureItem.matches('a[class="picture"]')){
      socialCaption.textContent = users[i].description
      likesCount.textContent = users[i].likes
      commnetsCount.textContent = users[i].quantityComments
      avatarPicture.src = "./img/avatar-" + createRandomInt(1, 6) + ".svg"
      bigPicture.src = users[i].url

      classHidden.classList.remove('hidden')
      document.querySelector('body').classList.add('modal-open')

      bigPictureCancel.addEventListener('click', function(){
        classHidden.classList.add('hidden')
        document.querySelector('body').classList.remove('modal-open')
      })
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
          classHidden.classList.add('hidden')
          document.querySelector('body').classList.remove('modal-open')
        }
      })

      for(let j = 0; j<users[i].quantityComments; j++){
        socialCommentPicture.src =  users[i].comment[j].avatar
        socialCommentPicture.alt = users[i].comment[j].name
        socialCommentText.textContent = users[i].comment[j].message

        let socialCommentItem = socialComment.cloneNode(true)
        commentContainer.appendChild(socialCommentItem)
      }

      socialCommnetCount.classList.add('hidden')
      commentsLoader.classList.add('hidden')

    }
  })
}

