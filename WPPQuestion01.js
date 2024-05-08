// Question 01

/* Write a JavaScript program to display the current day and time in the following format.
   Output : 
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function getDayTime () {
  let date = new Date()
  console.log(`Today is: ${weekday[date.getDay()]}`)

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let milliSecond = date.getMilliseconds()
  let newHoursFormate = hours > 12 ? `PM` : `AM`
  hours = hours % 12
  hours = hours ? hours : 12
  hours = hours > 12 ? `0${hours}` : `${hours}`
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  milliSecond = milliSecond < 10 ? `0${milliSecond}` : `${milliSecond}`
  console.log(`Current time is : ${hours}: ${minutes}: ${milliSecond} ${newHoursFormate}`)
}
getDayTime()

/* let currentDate = new Date()
let day = `Today is: ${weekday[currentDate.getDay()]}`
let time = `Current time is Hours:${currentDate.getHours()} Min ${currentDate.getMinutes()} Sec ${currentDate.getMilliseconds()}`
console.log(day)
console.log(time) */

