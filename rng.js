// We'll be using current Date Time in milliseconds in order to generate
// (pseudo) random numbers
function roll() {
  var benchmark = new Date();
  var chance = Math.ceil(benchmark.getMilliseconds() / 10);
  document.getElementById('numDisplay').innerHTML = chance + " %";
  var x = document.getElementsByTagName('img');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].className = "hidden";
  };
  if (chance < 11) {
    document.getElementsByClassName('gold')[0].className = '';
  }
  else if (chance > 10 && chance < 61) {
    document.getElementsByClassName('silver')[0].className = '';
  }
  else {
    document.getElementsByClassName('bronze')[0].className = '';
  }
}
