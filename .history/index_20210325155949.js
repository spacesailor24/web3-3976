const Web3 = require('web3');

let provider = new Web3('https://mainnet.infura.io/v3/1001ea5c697346deb21bde1d95668821')
let web3 = new Web3(provider)
let block = await web3.eth.getBlock(595091, true)