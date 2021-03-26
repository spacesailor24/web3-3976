const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed1.binance.org:443')

const exampleOne = async () => {
  try {
    await web3.eth.getBlock(595091, true)
  } catch (error) {
    throw `example one unsuccessful: ${error.message}`
  }
}

const exampleTwo = async () => {
  const res = await web3.eth.getBlock(1365710);

  await Promise.all(
    res.transactions.map(async (txId) => {
      try {
        await web3.eth.getTransaction(txId);
      } catch (error) {
        throw `example two unsuccessful for tx with ID: ${txId}`;
      }
    }),
  );
}

(async () => {
  try
})()
