const jsonrpc = require('../../lib/index')
const JsonRpcServer = jsonrpc.server
const JsonRpcChildProcTransport = jsonrpc.transports.server.childProcess

new JsonRpcServer(new JsonRpcChildProcTransport(), {
  loopback: (obj, callback) => callback(null, obj),
  failure: (obj, callback) => {
    const error = new Error('Whatchoo talkin\' \'bout, Willis?')
    error.prop = 1
    callback(error)
  }
})
