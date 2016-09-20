function setImg(roll, i) {
  var imgFrame = document.getElementsByClassName('img-frame')[i];
  var resultFrame = document.getElementsByClassName('roll-result')[i];
  if(roll > 0 && roll < 11) {
    imgFrame.style.backgroundImage = "url('img/Gold.png')";
    resultFrame.innerHTML = "Roll Chance: " + roll + "%";
  }
  else if (roll > 10 && roll < 41) {
    imgFrame.style.backgroundImage = "url('img/Silver.png')";
    resultFrame.innerHTML = "Roll Chance: " + roll + "%";
  }
  else {
    imgFrame.style.backgroundImage = "url('img/Bronze.png')";
    resultFrame.innerHTML = "Roll Chance: " + roll + "%";
  }
}

function roll() {
  $('#start').attr('disabled', true);
  var i = 0;
  var sum = 0;
  var int = setInterval(function(){
  var roll = Math.floor((Math.random() * 100) + 1);
  sum += roll;
  console.log(i, roll, sum);
  anim(i, roll);
  i+=1;
    if (i == 6) {
        clearInterval(int);
        return sum;
      }
    }, 666);
  setTimeout( function() {resultingChance(sum);}, 6800);
}

document.getElementById('start').addEventListener('click', roll);
document.getElementById('reload').addEventListener('click', function(){location.reload()});

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

function resultingChance(sum) {
  var ovrlChnc = Math.floor(sum/6);
  if (ovrlChnc < 21) {
  $('#result-frame').html("Your average rolled chance is " + ovrlChnc + "% ! Wow, that's hella lucky!");
  }
  else if (ovrlChnc > 20 && ovrlChnc < 41) {
    $('#result-frame').html("Your average rolled chance is " + ovrlChnc + "% ! Decent luck right there");
  }
  else {
    $('#result-frame').html("Your average rolled chance is " + ovrlChnc + "% ! Meh");
  }
  $('#reload').velocity({ opacity: 1 }, { display: "block" }, 2000);
}
