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
  var i = 0;
  var int = setInterval(function(){
  var roll = Math.floor((Math.random() * 100) + 1);
  console.log(i, roll);
  anim(i, roll);
  i+=1;
    if (i == 6) {
        clearInterval(int);
      }
    }, 500);
}

document.getElementById('start').addEventListener('click', roll);

function anim(i, roll) {
  var tab = document.getElementsByClassName('img-frame')[i];
  $(tab).css('transform', 'rotateY(630deg)');
    setTimeout( function() {
            setImg(roll, i);
            $(tab).css('transform', 'rotateY(1260deg)');
       }, 3010);
}
