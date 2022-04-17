var count1 = 0;

function playPause1() {
  if (count1 == 0) {
    count1 = 1
    audio1.play();
    document.getElementById('playPauseBTN1').setAttribute("class", "style1");
    // playPauseBTN1.innerHTML = "⏸";
  } else {
    count1 = 0;
    audio1.pause();
    document.getElementById('playPauseBTN1').setAttribute("class", "style2");
    // playPauseBTN1.innerHTML = "▶️";
  }
}


var count2 = 0;

function playPause2() {
  if (count2 == 0) {
    count2 = 1;
    audio2.play();
    document.getElementById('playPauseBTN2').setAttribute("class", "style1");
  } else {
    count2 = 0;
    audio2.pause();
    document.getElementById('playPauseBTN2').setAttribute("class", "style2");
    // playPauseBTN2.innerHTML = "▶️";
  }
}

var count3 = 0;

function playPause3() {
  if (count3 == 0) {
    count3 = 1;
    audio3.play();
    document.getElementById('playPauseBTN3').setAttribute("class", "style1");
  } else {
    count3 = 0;
    audio3.pause();
      document.getElementById('playPauseBTN3').setAttribute("class", "style2");
    // playPauseBTN3.innerHTML = "▶️";
  }
}

var count4 = 0;

function playPause4() {
  if (count4 == 0) {
    count4 = 1;
    audio4.play();
    document.getElementById('playPauseBTN4').setAttribute("class", "style1");
  } else {
    count4 = 0;
    audio4.pause();
    document.getElementById('playPauseBTN4').setAttribute("class", "style2");
    // playPauseBTN4.innerHTML = "▶️";
  }
}

var count5 = 0;

function playPause5() {
  if (count5 == 0) {
    count5 = 1;
    audio5.play();
    document.getElementById('playPauseBTN5').setAttribute("class", "style1");
  } else {
    count5 = 0;
    audio5.pause();
    document.getElementById('playPauseBTN5').setAttribute("class", "style2");
    // playPauseBTN5.innerHTML = "▶️";
  }
}

var count6 = 0;

function playPause6() {
  if (count6 == 0) {
    count6 = 1;
    audio6.play();
    document.getElementById('playPauseBTN6').setAttribute("class", "style1");
  } else {
    count6 = 0;
    audio6.pause();
    document.getElementById('playPauseBTN6').setAttribute("class", "style2");
    // playPauseBTN6.innerHTML = "▶️";
  }
}

var count7 = 0;

function playPause7() {
  if (count7 == 0) {
    count7 = 1;
    audio7.play();
    document.getElementById('playPauseBTN7').setAttribute("class", "style1");
  } else {
    count7 = 0;
    audio7.pause();
    document.getElementById('playPauseBTN7').setAttribute("class", "style2");
    // playPauseBTN7.innerHTML = "▶️";
  }
}

var count8 = 0;

function playPause8() {
  if (count8 == 0) {
    count8 = 1;
    audio8.play();
    document.getElementById('playPauseBTN8').setAttribute("class", "style1");
  } else {
    count8 = 0;
    audio8.pause();
    document.getElementById('playPauseBTN8').setAttribute("class", "style2");
    // playPauseBTN8.innerHTML = "▶️";
  }
}


// Random shuffle
var functions=[ playPause1, playPause2, playPause3, playPause4, playPause5, playPause6, playPause7, playPause8];
function randomNumber(n) {
	return Math.floor( Math.random() * n);
}
function randomsongs(){
functions[ randomNumber( functions.length ) ]();
}
