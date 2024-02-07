let timerInterval: number;

self.onmessage = function (event) {
  if (event.data === "start") {
    timerInterval = setInterval(() => {
      self.postMessage("tick");
    }, 1000);
  } else if (event.data === "stop") {
    clearInterval(timerInterval);
  }
};
