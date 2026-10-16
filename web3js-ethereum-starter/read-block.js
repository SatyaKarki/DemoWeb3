import { Web3 } from "web3";

const rpcUrl = process.env.ETHEREUM_RPC_URL;

if (!rpcUrl) {
    throw new Error(
        "ETHEREUM_RPC_URL is not configured."
    );
}

const web3 = new Web3(rpcUrl);

const chainId = await web3.eth.getChainId();

const blockNumber =
    await web3.eth.getBlockNumber();

const block =
    await web3.eth.getBlock(blockNumber);

console.log("Chain ID:", chainId.toString());

console.log(
    "Block Number:",
    blockNumber.toString()
);

console.log("Block Hash:", block.hash);

console.log(
    "Transaction Count:",
    block.transactions.length
);