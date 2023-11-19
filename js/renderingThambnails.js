import { createUsers } from "./util.js";

let users = createUsers(25)
console.log(users);

let pictures = document.querySelector('.pictures')
let templatePicture = document.querySelector('#picture').content
let pictureUrl = templatePicture.querySelector('.picture__img')
let quantityLikes = templatePicture.querySelector('.picture__likes')
let quantityComments = templatePicture.querySelector('.picture__comments')
let fragment = document.createDocumentFragment()

console.log(templatePicture);

for(let i = 0; i<users.length; i++){
  pictureUrl.src = users[i].url
  pictureUrl.alt = users[i].description
  quantityLikes.textContent = users[i].likes
  quantityComments.textContent = users[i].quantityComments
  let templatePictureItem = templatePicture.cloneNode(true)
  fragment.appendChild(templatePictureItem)
}
pictures.appendChild(fragment)