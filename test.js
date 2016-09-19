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
  $('button').prop('disabled', true);
  var i = 0;
  var int = setInterval(function(){
  var roll = Math.floor((Math.random() * 100) + 1);
  console.log(i, roll);
  anim(i, roll);
  i+=1;
    if (i == 6) {
        clearInterval(int);
      }
    }, 666);
}

document.getElementById('start').addEventListener('click', roll);

function anim(i, roll) {
  var tab = document.getElementsByClassName('img-frame')[i];
  $(tab).velocity({
    rotateY: "630deg"
  }, 2000);
    setTimeout( function() {
            setImg(roll, i);
            $(tab).velocity({
              rotateY: "720deg"
            },700);
       }, 2010);
}
