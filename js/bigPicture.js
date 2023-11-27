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
let commentsLoader = classHidden.querySelector('.comments-loader')
//---------------------------------------------------------------------//
let commentContainer = document.querySelector('.social__comments')
let socialComment = document.getElementById("social__comment").content
console.log(document.getElementById("social__comment"));
let socialCommentClass = socialComment.querySelector('.social__comment')
let socialCommentPicture = socialComment.querySelector(".social__picture")
let socialCommentText = socialComment.querySelector(".social__text")
console.log(users)
for(let i = 0; i < picture.length; i++){
  let pictureItem = picture[i]
  pictureItem.addEventListener('click', function(evt){
    evt.preventDefault()

    socialCaption.textContent = users[i].description
    likesCount.textContent = users[i].likes
    commnetsCount.textContent = users[i].quantityComments
    avatarPicture.src = "./img/avatar-" + createRandomInt(1, 6) + ".svg"
    bigPicture.src = users[i].url

    classHidden.classList.remove('hidden')
    document.querySelector('body').classList.add('modal-open')

    function showComments(start, end){
      console.log(start, end)

      let currentComments = users[i].comment.slice(start, end);
      commentsLoader.style.display = 'inline-block'
      if(end >= users[i].comment.length) {
        end = users[i].comment.length - 1;
        commentsLoader.style.display = 'none'
      }
      for(let j = 0; j < currentComments.length; j++){
        socialCommentPicture.src =  currentComments[j].avatar
        socialCommentPicture.alt = currentComments[j].name
        socialCommentText.textContent = currentComments[j].message
        let socialCommentItem = socialComment.cloneNode(true)
        console.log(socialComment);
        commentContainer.appendChild(socialCommentItem)
      }
    }
    let startShowComment = 0
    let endShowComment = 5
    showComments(startShowComment, endShowComment)

    commentsLoader.addEventListener('click', function(){

      // if((endShowComment += 5) > users[i].quantityComments){
      //   endShowComment = users[i].quantityComments
      //   startShowComment += 5
      // } else{
      //   startShowComment += 5
      //   endShowComment += 5
      // }
      socialCommnetCount.textContent = users[i].comment.length - 1
      startShowComment += 5;
      endShowComment += 5;
      showComments(startShowComment, endShowComment)
    })

    bigPictureCancel.addEventListener('click', function(){
      commentContainer.innerHTML = '';
      classHidden.classList.add('hidden')
      document.querySelector('body').classList.remove('modal-open')
      for(let k=0; k<users[i].quantityComments; k++){
      }
    })
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        classHidden.classList.add('hidden')
        document.querySelector('body').classList.remove('modal-open')
      }
    })
  })
}

