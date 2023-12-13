import { arrayUsers } from "./renderingThambnails.js";

let pictures = document.querySelector('.pictures')
let bigPicture = document.querySelector('.big-picture')
let bigPictureImg = bigPicture.querySelector('#big-picture__img')
let socialComment = document.querySelector('.social__comments')
let openComments = document.querySelector('.social__comment-count')

function addComment(start, stop, comments){                       //Добавление коментария под большим фото
  for(let i = start; i<stop; i++){
    let templateComment = document.querySelector('#social__comment').content
    let commentForBigPicture = templateComment.querySelector('.social__comment')
    let commentPicture = commentForBigPicture.querySelector('.social__picture')
    let commentText = commentForBigPicture.querySelector('.social__text')


    commentPicture.src = comments.comments[i].avatar
    commentText.textContent = comments.comments[i].message
    let commentItem = templateComment.cloneNode(true)
    socialComment.appendChild(commentItem)
  }
}
let buttonLoader = document.querySelector('.comments-loader')
let start = 0
let stop = 5
let userItem

pictures.addEventListener('click', function(event){
  userItem = event.target


  if(arrayUsers[userItem.dataset.id].comments.length <= 5){
    buttonLoader.classList.add('hidden')
    openComments.textContent = arrayUsers[userItem.dataset.id].comments.length
    start = 0
    stop = arrayUsers[userItem.dataset.id].comments.length
  }else {
    openComments.textContent = 5
    start = 0
    stop = 5
  }

  let commentsCount = document.querySelector('.comments-count')
  let likesCount = document.querySelector('.likes-count')
  if(userItem.classList.contains('picture__img')){

    bigPictureImg.src = userItem.src
    bigPicture.classList.remove('hidden')

    commentsCount.textContent = arrayUsers[userItem.dataset.id].comments.length
    likesCount.textContent = arrayUsers[userItem.dataset.id].likes
    addComment(start, stop, arrayUsers[userItem.dataset.id])
  }
})
buttonLoader.addEventListener('click', function(){
  if(stop + 5 >= arrayUsers[userItem.dataset.id].comments.length){
    stop = arrayUsers[userItem.dataset.id].comments.length
    start += 5
    buttonLoader.classList.add('hidden')
  } else{
    start += 5
    stop += 5
  }
  openComments.textContent = stop
  addComment(start, stop, arrayUsers[userItem.dataset.id])
});






let bigPictureCancel = bigPicture.querySelector('.big-picture__cancel')
bigPictureCancel.addEventListener('click', function(){
  bigPicture.classList.add('hidden')
  buttonLoader.classList.remove('hidden')
  socialComment.innerHTML = ""
})
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    bigPicture.classList.add('hidden')
    buttonLoader.classList.remove('hidden')
    socialComment.innerHTML = ""
  }
})