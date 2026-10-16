import { Web3 } from "web3";

const rpcUrl = process.env.ETHEREUM_RPC_URL;

const address = process.env.ETHEREUM_ADDRESS;

if (!rpcUrl || !address) {
    throw new Error(
        "Configure ETHEREUM_RPC_URL and ETHEREUM_ADDRESS."
    );
}

const web3 = new Web3(rpcUrl);

const balanceWei =
    await web3.eth.getBalance(address);

const balanceEth =
    web3.utils.fromWei(
        balanceWei,
        "ether"
    );

console.log("Address:", address);

console.log(
    "Balance in wei:",
    balanceWei.toString()
);

console.log(
    "Balance in ETH:",
    balanceEth
);