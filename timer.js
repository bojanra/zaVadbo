function job(delay) {
  return new Promise(function (resolve, reject) {
    console.log('Launching timer t='+delay)
    setTimeout(function () {
      console.log('  Timer reached t=', delay);
      resolve(delay);
    }, delay);
  });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function (data) {
  console.log('Following timer reached end:');
  data.forEach(function (text) {
    console.log('['+text+']');
  });
});
