import { Web3 } from "web3";

const rpcUrl = process.env.ETHEREUM_RPC_URL;

if (!rpcUrl) {
    throw new Error(
        "ETHEREUM_RPC_URL is not configured."
    );
}

const web3 = new Web3(rpcUrl);

const blockNumber =
    await web3.eth.getBlockNumber();

console.log(
    "Latest Ethereum block:",
    blockNumber.toString()
);