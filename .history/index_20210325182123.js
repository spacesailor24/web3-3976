const Web3 = require('web3');

const exampleOne = async () => {
  const web3 = new Web3('https://bsc-dataseed1.binance.org:443')
  const block = await web3.eth.getBlock(595091, true)
  if (block) console.log(`example one successful, got block with tx with ${block.transactions[1].gas}`)
}

(async () => {
  Promise.all(exampleOne)
})()
