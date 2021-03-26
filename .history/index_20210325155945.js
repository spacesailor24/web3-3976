const Web3 = require('web3');

let provider = new Web3('ws://somewhere.com')
let web3 = new Web3(provider)
let block = await web3.eth.getBlock(595091, true)