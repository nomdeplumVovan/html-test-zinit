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