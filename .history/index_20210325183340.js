const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed1.binance.org:443')

const exampleOne = async () => {
  try {
    await web3.eth.getBlock(595091, true)
  } catch (error) {
    
  }
  if (block) console.log(`example one successful, got block with tx with ${block.transactions[1].gas}`)
}

const exampleTwo = async () => {
  const res = await web3.eth.getBlock(1365710);

  await Promise.all(
    res.transactions.map(async (txId) => {
      try {
        await web3.eth.getTransaction(txId);
      } catch (error) {
        console.error(`example two unsuccessful for tx: ${txId}`);
      }
    }),
  );
}

(async () => {
  await exampleOne()
  await exampleTwo()
})()
