const Web3 = require('web3');

async function main() {
  const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

  const res = await web3.eth.getBlock(595091);

  await Promise.all(
    res.transactions.map(async (txId) => {
      try {
        // console.log(`decode ${txId}`);
      } catch (error) {
        console.log(error)
        console.error(`error decode ${txId}`);
      }
    }),
  );
}

main();