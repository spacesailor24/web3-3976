import * as Web3 from 'web3';

async function main() {
  const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

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

main();