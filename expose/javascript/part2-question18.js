function printSecond(){
  let date = new Date();
  let time = date.toLocaleTimeString();
  console.log(time);
}

var secondsID = setInterval(printSeconds,1000);

