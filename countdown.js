const uiTime = document.querySelectorAll("h2");
const now = new Date().getDate();
let endDate = new Date(2022, 01, now + 10, 22, 30);
// Calcuate the time difference in days, hours, mins and secs

function updateUi() {
  const today = new Date();
  const timeDiff = endDate - today;
  let days = parseInt(timeDiff / (1000 * 60 * 60 * 24));
  let hours = parseInt((timeDiff / (1000 * 60 * 60)) % 24);
  let minutes = parseInt((timeDiff / (1000 * 60)) % 60);
  let seconds = parseInt((timeDiff / 1000) % 60);

  // Input the calcualted values into the DOM elementss
  const results = [days, hours, minutes, seconds];

  // Checks if any of the time is less than 10 and adds 0 to the beginning
  function format(time) {
    if (time < 10) () => (time = `0${time}`);
    return time;
  }

  uiTime.forEach((time, index) => {
    time.innerHTML = format(results[index]);
  });
  if (timeDiff < 0) clearInterval(remainingTime);
}
const remainingTime = setInterval(updateUi, 1000);
updateUi();
