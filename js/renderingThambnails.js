import { getUser } from "./util.js";

let arrayUsers = await getUser()

let pictures = document.querySelector('.pictures')
let templatePicture = document.querySelector('#picture').content
let pictureUrl = templatePicture.querySelector('.picture__img')
let quantityLikes = templatePicture.querySelector('.picture__likes')
let quantityComments = templatePicture.querySelector('.picture__comments')

for(let i = 0; i < arrayUsers.length; i++){
  pictureUrl.dataset.id = arrayUsers[i].id
  pictureUrl.src = arrayUsers[i].url
  pictureUrl.alt = arrayUsers[i].description
  quantityLikes.textContent = arrayUsers[i].likes
  quantityComments.textContent = arrayUsers[i].comments.length
  let templatePictureItem = templatePicture.cloneNode(true)
  pictures.appendChild(templatePictureItem)
}



export { arrayUsers }