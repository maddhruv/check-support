function CheckWebWorkers () {
  if (window || !window.Worker) {
    throw new Error('Web Workers are not supported in this browser')
  }
}

module.exports = CheckWebWorkers