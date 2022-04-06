const uiTime = document.querySelectorAll("h2");
// Always add 10 days to current day
function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}
const date = new Date();
const endDate = addDays(date, 10);
function updateUi() {
  const today = new Date();
  const timeDiff = endDate - today;
  let days = parseInt(timeDiff / (1000 * 60 * 60 * 24));
  let hours = parseInt((timeDiff / (1000 * 60 * 60)) % 24);
  let minutes = parseInt((timeDiff / (1000 * 60)) % 60);
  let seconds = parseInt((timeDiff / 1000) % 60);

  const results = [days, hours, minutes, seconds];

  //Adds 10 to single digit
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
