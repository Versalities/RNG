function setImg(roll, i) {
  var imgFrame = document.getElementsByClassName('img-frame')[i];
  if(roll > 0 && roll < 11) {
    imgFrame.style.backgroundImage = "url('img/Gold.png')";
  }
  else if (roll > 10 && roll < 41) {
    imgFrame.style.backgroundImage = "url('img/Silver.png')";
  }
  else {
    imgFrame.style.backgroundImage = "url('img/Bronze.png')";
  }
}

function roll() {
  for(i = 0; i < 6; i++) {
    var roll = Math.floor((Math.random() * 100) + 1);
    console.log(roll);
    setImg(roll, i);
  }
}

document.getElementById('start').addEventListener('click', roll);
