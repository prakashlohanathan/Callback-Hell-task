
var countdownElement = document.createElement('h1');
countdownElement.id = 'countdown';
document.body.appendChild(countdownElement);


var messageElement = document.createElement('p');
messageElement.id = 'message';
document.body.appendChild(messageElement);


function updateCountdown(countdown) {
  
  countdownElement.innerText = countdown;

  
  if (countdown === 1) {
    messageElement.innerText = "Happy Independence Day";
    setTimeout(() => {
      countdownElement.innerText = "";
    }, 0);
  } else {
    
    setTimeout(() => updateCountdown(countdown - 1), 1000);
  }
}


updateCountdown(10);