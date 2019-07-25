function CheckWebWorkers (cb) {
  if (!window.Worker) {
    cb || cb()
    throw new Error('Web Workers are not supported in this browser')
  }
}

module.exports = CheckWebWorkers