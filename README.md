# MiniGigs SDK

The official SDK for interacting with the MiniGigs micro-task marketplace on Celo Mainnet.

## Installation

```bash
npm install @minigigs/sdk ethers
```

## Quick Start

### Initialize Contract

```javascript
const { ethers } = require("ethers");
const { getMiniGigsContract, MINIGIGS_ADDRESS } = require("@minigigs/sdk");

const provider = new ethers.JsonRpcProvider("https://forno.celo.org");
const contract = getMiniGigsContract(provider);

// Get total gigs
const count = await contract.gigCount();
console.log(`Total Gigs: ${count}`);
```

### Post a Gig

```javascript
const { getMiniGigsContract, getCUSDContract, MINIGIGS_ADDRESS } = require("@minigigs/sdk");
const { ethers } = require("ethers");

const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);
const miniGigs = getMiniGigsContract(wallet);
const cusd = getCUSDContract(wallet);

const bounty = ethers.parseUnits("0.1", 18); // 0.1 cUSD

// 1. Approve cUSD
await cusd.approve(MINIGIGS_ADDRESS, bounty);

// 2. Post Gig
const tx = await miniGigs.postGig(
  "Test Gig",
  "This is a test description",
  bounty,
  7 // 7 days duration
);
await tx.wait();
```

## Contracts

- **MiniGigs**: `0x2eADE8A2C7F2561136180451545F0a4d938Ba694`
- **cUSD**: `0x765DE816845861e75A25fCA122bb6898B8B1282a`

## License

ISC
