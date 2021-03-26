const Web3 = require('web3');

const exampleOne = () => {
  const provider = new Web3('https://bsc-dataseed1.binance.org:443')
  const block = await web3.eth.getBlock(595091, true)
  if (block) console.log(`example one successful`)
}

(async () => {
  
})()
