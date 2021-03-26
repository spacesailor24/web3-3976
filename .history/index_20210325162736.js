const Web3 = require('web3');

(async () => {
  let provider = new Web3('https://bsc-dataseed1.binance.org:443')
  let web3 = new Web3(provider)
  await web3.eth.getBlock(595091, true)
})()
