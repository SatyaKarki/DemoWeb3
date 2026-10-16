import { Web3 } from "web3";

const rpcUrl = process.env.ETHEREUM_RPC_URL;

if (!rpcUrl) {
    throw new Error(
        "ETHEREUM_RPC_URL is not configured."
    );
}

const web3 = new Web3(rpcUrl);

const tokenAddress =
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";

const tokenAbi = [
    {
        inputs: [],
        name: "name",
        outputs: [
            { type: "string", name: "" }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            { type: "string", name: "" }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            { type: "uint8", name: "" }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            { type: "uint256", name: "" }
        ],
        stateMutability: "view",
        type: "function"
    }
];

const token = new web3.eth.Contract(
    tokenAbi,
    tokenAddress
);

const name =
    await token.methods.name().call();

const symbol =
    await token.methods.symbol().call();

const decimals =
    await token.methods.decimals().call();

const totalSupply =
    await token.methods.totalSupply().call();

console.log("Token Name:", name);
console.log("Token Symbol:", symbol);
console.log("Decimals:", decimals.toString());
console.log(
    "Raw Total Supply:",
    totalSupply.toString()
);