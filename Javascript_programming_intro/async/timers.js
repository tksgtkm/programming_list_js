function wait(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }
    setTimeout(resolve, duration);
    console.log('executed!!')
  });
}

let duration = 2000;
wait(duration);
