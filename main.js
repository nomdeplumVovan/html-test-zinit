////// слайдер на три кадра///

const getNextEl = () => document.getElementById('right');
const getPrevEl = () => document.getElementById('left');
const getSlideEl = () => document.getElementById('slide');
const getDotsRightEl = () => document.getElementById('dots-right');
const getDotsLeftEl = () => document.getElementById('dots-left');
const getDotsEl = () => document.getElementById('dots');

const COLOR = '#919191';
let count = 1;

function showCenterSlide() {
  count = 1;

  getSlideEl().style.backgroundImage = 'url(./assets/image/breather-196132.png)';
  getDotsEl().style.borderColor = '#0099d2';

  getDotsLeftEl().style.borderColor = COLOR;
  getDotsRightEl().style.borderColor = COLOR;

  getNextEl().style.visibility = 'visible';
  getPrevEl().style.visibility = 'visible';
}

function showNextSlide() {
  count++;

  if (count > 1) {
    getNextEl().style.visibility = 'hidden';
    getSlideEl().style.backgroundImage = 'url(./assets/image/slide4.jpg)';
    getDotsRightEl().style.borderColor = '#0099d2';
    getDotsLeftEl().style.borderColor = COLOR;
    getDotsEl().style.borderColor = COLOR;
  } else {
    return showCenterSlide();
  }
}

function showPrevSlide() {
  count--;

  if (count < 1) {
    getSlideEl().style.backgroundImage = 'url(./assets/image/slide5.jpg)';
    getPrevEl().style.visibility = 'hidden';
    getDotsLeftEl().style.borderColor = '#0099d2';
    getDotsRightEl().style.borderColor = COLOR;
    getDotsEl().style.borderColor = COLOR;
  } else {
    return showCenterSlide();
  }
  // document.getElementById('slide').className = '';
}

////////Замена шрифтов в корне///////

function changeFontSize(el, elements) {
  elements.forEach(el => el.classList.remove('selected-font'));
  el.classList.add('selected-font');
}

function changeDocumentFontSizeHandler(fontSize) {
  return function (e) {
    e.preventDefault();
    document.documentElement.style.fontSize = fontSize;

    changeFontSize(e.target, [
      document.getElementById('size10'),
      document.getElementById('size12'),
      document.getElementById('size14')
    ]);
  }
}

window.addEventListener('load', () => {
  document.getElementById('size10').addEventListener('click', changeDocumentFontSizeHandler('62.5%'));
  document.getElementById('size12').addEventListener('click', changeDocumentFontSizeHandler('75%'));
  document.getElementById('size14').addEventListener('click', changeDocumentFontSizeHandler('87.5%'));
});

///////
//////остановка анимации картинок новостей при загрузке//////

function toggleOpasityStop(el, elements) {
  ///// переключение анимации между картинками/////
  // elements.forEach(el => el.classList.remove('animationStop'));  
  el.classList.add('animationStop');
}

function toggleOpasityStopHandler() {
  return function (e) {
    e.preventDefault();

    toggleOpasityStop(e.target, [
      document.getElementById('imgNews1'),
      document.getElementById('imgNews2'),
      document.getElementById('imgNews3'),
      document.getElementById('imgNews4')
    ]);
  }
}

window.addEventListener('load', () => {
  document.getElementById('imgNews1').addEventListener('click', toggleOpasityStopHandler());
  document.getElementById('imgNews2').addEventListener('click', toggleOpasityStopHandler());
  document.getElementById('imgNews3').addEventListener('click', toggleOpasityStopHandler());
  document.getElementById('imgNews4').addEventListener('click', toggleOpasityStopHandler());

});