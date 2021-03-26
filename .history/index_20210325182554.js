const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed1.binance.org:443')

const exampleOne = async () => {
  const block = await web3.eth.getBlock(595091, true)
  if (block) console.log(`example one successful, got block with tx with ${block.transactions[1].gas}`)
}

const exampleTwo = async () => {
  const res = await web3.eth.getBlock(1365710);

  await Promise.all(
    res.transactions.map(async (txId) => {
      try {
        const tx = await web3.eth.getTransaction(txId);

        console.log(`decode ${txId}`);
      } catch (error) {
        console.error(`error decode ${txId}`);
      }
    }),
  );
}

(async () => {
  exampleOne
  exampleTwo
})()
