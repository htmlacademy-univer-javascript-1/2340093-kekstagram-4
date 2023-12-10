import { users } from "./renderingThambnails.js";

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


    commentPicture.src = comments.comment[i].avatar
    commentText.textContent = comments.comment[i].message
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
  openComments.textContent = 5
  let commentsCount = document.querySelector('.comments-count')
  let likesCount = document.querySelector('.likes-count')
  if(userItem.classList.contains('picture__img')){

    bigPictureImg.src = userItem.src
    bigPicture.classList.remove('hidden')
    buttonLoader.classList.remove('hidden')
    commentsCount.textContent = users[userItem.dataset.id - 1].quantityComments
    likesCount.textContent = users[userItem.dataset.id - 1].likes
    start = 0
    stop = 5
    addComment(start, stop, users[userItem.dataset.id - 1])
  }
})
buttonLoader.addEventListener('click', function(){
  if(stop + 5 >= users[userItem.dataset.id - 1].quantityComments){
    stop = users[userItem.dataset.id - 1].quantityComments
    start += 5
    buttonLoader.classList.add('hidden')
  } else{
    start += 5
    stop += 5
  }
  openComments.textContent = stop
  addComment(start, stop, users[userItem.dataset.id - 1])
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