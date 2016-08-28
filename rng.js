// We'll be using current Date Time in milliseconds in order to generate
// (pseudo) random numbers
function roll() {
  var benchmark = new Date();
  var chance = Math.ceil(benchmark.getMilliseconds() / 10);
  document.getElementById('numDisplay').innerHTML = chance + " %";
}

document.getElementById('generator').addEventListener("click", roll);
