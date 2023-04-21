function countDown(counter) {
    if (counter >= 0) {
      console.log(counter);
      setTimeout(countDown, 1000, counter - 1);
    } else {
      console.log("Happy Independence Day");
    }
  }
  
  countDown(10);