// const next = document.getElementById('right');
// const prev = document.getElementById('left');
// const slide = document.getElementById('slide');
// const dotsRight = document.getElementById('dots-right');
// const dotsLeft = document.getElementById('dots-left');
// const dots = document.getElementById('dots');

let count = 1;


function showCenterSlide() {
  count = 1;

  document.getElementById('slide').style.
  backgroundImage = 'url(./assets/image/breather-196132.png)';

  document.getElementById('dots').style.borderColor = '#0099d2';

  document.getElementById('dots-left').style.
  borderColor = document.getElementById('dots-right').style.
  borderColor = '#919191';

  document.getElementById('right').style.
  visibility = document.getElementById('left').style.visibility = 'visible';
}

function showNextSlide() {
  count++;

  if (count > 1) {
    document.getElementById('right').style.visibility = 'hidden';

    document.getElementById('slide').style.
    backgroundImage = 'url(./assets/image/slide4.jpg)';

    document.getElementById('dots-right').style.borderColor = '#0099d2';

    document.getElementById('dots-left').style.
    borderColor = document.getElementById('dots').style.
    borderColor = '#919191';

  } else {
    return showCenterSlide();
  }
}

function showPrevSlide() {
  count--;

  if (count < 1) {
    document.getElementById('left').style.visibility = 'hidden';

    document.getElementById('slide').style.
    backgroundImage = 'url(./assets/image/slide5.jpg)';

    document.getElementById('dots-left').style.borderColor = '#0099d2';

    document.getElementById('dots-right').style.
    borderColor = document.getElementById('dots').style.
    borderColor = '#919191';

  } else {
    return showCenterSlide();
  }
}



function changeFontSize10() {

  document.documentElement.style.fontSize = '62.5%';

  document.getElementById('size10').
  style.backgroundImage = 'url(./assets/icons/activeFontSize.png)';

  document.getElementById('size12').
  style.backgroundImage = document.getElementById('size14').
  style.backgroundImage = 'none';

  return;
}

function changeFontSize12() {

  document.documentElement.style.fontSize = '75%';

  document.getElementById('size12').
  style.backgroundImage = 'url(./assets/icons/activeFontSize.png)';

  document.getElementById('size10').
  style.backgroundImage = document.getElementById('size14').
  style.backgroundImage = 'none';

  return;
}

function changeFontSize14() {

  document.documentElement.style.fontSize = '87.5%';

  document.getElementById('size14').
  style.backgroundImage = 'url(./assets/icons/activeFontSize.png)';

  document.getElementById('size12').
  style.backgroundImage = document.getElementById('size10').
  style.backgroundImage = 'none';

  return;
}

window.onload = timerId();

var timerFull, timerNone;

var opasityFull = '-webkit-transition: all 6s; -webkit-transform: rotateX(0deg); transition: all 6s; opacity: 1; filter: alpha(opacity=100);transform: rotateX(0deg);'

var opacityNone = '-webkit-transition: all 6s; -webkit-transform: rotateX(90deg); transition: all 6s; opacity: 0; filter: alpha(opacity=0); transform: rotateX(90deg);'

function timerId() {

  timerNone = setInterval(function () {
    document.getElementById('imgNews1').style = opacityNone;
  }, 6000);

  timerFull = setInterval(function () {
    document.getElementById('imgNews1').style = opasityFull;
  }, 12000);
 
};

function opasityStop() {

  clearInterval(timerFull);
  clearInterval(timerNone);

  document.getElementById('imgNews1').style = opasityFull;

  return;
}