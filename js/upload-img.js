let imgUpload = document.querySelector('.img-upload__overlay')
let imgInput = document.querySelector('.img-upload__input')
let imgCansel = document.querySelector('.img-upload__cancel')
let fileUpload = document.querySelector('#upload-file')
let imgPreview = document.querySelector('#img-upload__preview')
let imgPreviewMini = document.querySelectorAll('.effects__preview')

imgInput.addEventListener('change', function() {                     //загурзка изображения на страницу пользователем
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  let file = imgInput.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function(){
    console.log(reader.result);
    imgPreview.src = reader.result;
    for(let i = 0; i < imgPreviewMini.length; i++){
      imgPreviewMini[i].style.backgroundImage = "url(" + reader.result + ")";
    }
  }
});

imgCansel.addEventListener('click', function() {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

let scaleValue = document.querySelector('.scale__control--value')
let scaleSmaller = document.querySelector('.scale__control--smaller')
let scaleBigger = document.querySelector('.scale__control--bigger')
let effectList = document.querySelector('.effects__list')

scaleSmaller.addEventListener('click', function() {
  if(scaleValue.value == '75%'){
    scaleValue.value = '50%';
    imgPreview.style.transform ='scale(0.5)';
  }else if(scaleValue.value == '50%'){
    scaleValue.value = '25%';
    imgPreview.style.transform ='scale(0.25)';
  }else if(scaleValue.value == '100%'){
    scaleValue.value = '75%';
    imgPreview.style.transform ='scale(0.75)';
  }
})
                                                          //Маштаб изображения
scaleBigger.addEventListener('click', function() {
  if(scaleValue.value == '75%'){
    scaleValue.value = '100%';
    imgPreview.style.transform ='scale(1)';
  }else if(scaleValue.value == '50%'){
    scaleValue.value = '75%';
    imgPreview.style.transform ='scale(0.75)';
  }else if(scaleValue.value == '25%'){
    scaleValue.value = '50%';
    imgPreview.style.transform ='scale(0.5)';
  }
})

let slider = document.querySelector('.effect-level__slider')
let filter = 'none'
let measure = ''

noUiSlider.create(slider, {
  start: 1,
  connect: 'lower',
  step: 0.1,
  range: {
    'min': 0,
    'max': 1
  }
});

slider.noUiSlider.on('update', (...rest) => {
  imgPreview.style.filter = filter + '(' + slider.noUiSlider.get() + measure +')';
});

let imgUploadEffectLevel = document.querySelector('.img-upload__effect-level')
imgUploadEffectLevel.style.display = 'none'

effectList.addEventListener('click', function(e) {                        //Выбор фильтров
  let effect = e.target
  if(effect.classList.contains('effects__radio')){
    imgPreview.className = ''
    imgUploadEffectLevel.style.display = 'none';

    if(effect.value == 'none'){
      imgPreview.classList.add('effects__preview--none');
      imgUploadEffectLevel.style.display = 'none';
      imgPreview.style.filter = 'none';
    } else if(effect.value == 'chrome'){
      imgPreview.classList.add('effects__preview--chrome');
      imgUploadEffectLevel.style.display = 'block';
      filter = 'grayscale';
      measure = ''
      slider.noUiSlider.updateOptions({
        start: 1,
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      })
    } else if(effect.value == 'sepia'){
      imgPreview.classList.add('effects__preview--sepia');
      imgUploadEffectLevel.style.display = 'block';
      filter ='sepia';
      measure = ''
      slider.noUiSlider.updateOptions({
        start: 1,
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      })
    } else if(effect.value == 'marvin'){
      imgPreview.classList.add('effects__preview--marvin');
      imgUploadEffectLevel.style.display = 'block';
      filter ='invert';
      measure = '%'
      slider.noUiSlider.updateOptions({
        start: 100,
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
      })
    } else if(effect.value == 'phobos'){
      imgPreview.classList.add('effects__preview--phobos');
      imgUploadEffectLevel.style.display = 'block';
      filter = 'blur';
      measure = 'px'
      slider.noUiSlider.updateOptions({
        start: 3,
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
      })
    } else if(effect.value == 'heat'){
      imgPreview.classList.add('effects__preview--heat');
      imgUploadEffectLevel.style.display = 'block';
      filter = 'brightness';
      measure = ''
      slider.noUiSlider.updateOptions({
        start: 3,
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
      })
    }
  }
})